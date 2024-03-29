import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

interface Post {
  content: string;
  published: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed!' });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { content, published } = req.body;
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! }
  });

  if (!content) {
    return res.status(400).json({ error: 'Missing content...' });
  }

  if (content.length > 300) {
    return res.status(400).json({ error: 'Content too long...' });
  }

  try {
    const post = await prisma.post.create({
      data: {
        content: content,
        published: published,
        userId: user?.id!
      }
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong...' });
  }
}
