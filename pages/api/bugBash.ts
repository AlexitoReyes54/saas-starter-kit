import { NextApiRequest, NextApiResponse } from 'next';
import { createBugBashSession } from '../../models/BugBashSession';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'POST':
        await handlePOST(req, res);
        break;
      case 'GET':
        await handleGET(req, res);
        break;
      default:
        res.setHeader('Allow', 'POST');
        res.status(405).json({
          error: { message: `Method ${req.method} Not Allowed` },
        });
    }
  } catch (error: any) {
    const message = error.message || 'Something went wrong';
    const status = error.status || 500;

    res.status(status).json({ error: { message } });
  }
}

const handlePOST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, description, createdBy, teamId, userId } = req.body;
  const bugBash = await createBugBashSession({
    name: name,
    description: description,
    teamId: teamId,
    userId: userId
  });

  res.status(201).json(bugBash);
};

const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    message: 'GET request to bugBash',
  });
};
