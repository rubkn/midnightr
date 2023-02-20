import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';
import { PAGINATION_SIZE } from '@utils/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed!' });
  }

  const { page } = req.query;
  const skip = (Number(page) - 1) * PAGINATION_SIZE || 0;

  try {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
        comments: true,
        hearts: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: PAGINATION_SIZE,
      skip: skip
    });

    return res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error has occured while fetching the posts.' });
  }
}
