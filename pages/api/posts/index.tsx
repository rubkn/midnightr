import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed!' });
  }

  try {
    const allPosts = await prisma.post.findMany({
      include: {
        user: true,
        comments: true,
        hearts: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return res.status(200).json(allPosts);
  } catch (err) {
    res.status(403).json({ err: 'Error has occured while making a post' });
  }
}
