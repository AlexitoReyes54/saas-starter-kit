import { PrismaClient } from '@prisma/client';
import { BugBashSession } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import BugBashSessionData from '../interfaces/BugBashSessionData';

export const createBugBashSession = async (data: BugBashSessionData) => {
  return await prisma.bugBashSession.create({
    data: {
      name: data.name,
      description: data.description,
      teamId: data.teamId,
      userId: data.userId,
      createdAt: new Date(),
    },
  });
};

export const getAllBugBashSessionsFrrUser = async (
  teamId: string
): Promise<BugBashSession[]> => {
  return await prisma.bugBashSession.findMany({
    where: {
      teamId: teamId,
    },
  });
};

const updateBugBashSession = async ({ where, data }) => {
  const prisma = new PrismaClient();
  return await prisma.bugBashSession.update({
    where,
    data,
  });
};

const deleteBugBashSession = async ({ where }) => {
  const prisma = new PrismaClient();
  return await prisma.bugBashSession.delete({
    where,
  });
};

const findOneBugBashSession = async ({ where }) => {
  const prisma = new PrismaClient();
  return await prisma.bugBashSession.findUnique({
    where,
  });
};

const findManyBugBashSessions = async ({ where }) => {
  const prisma = new PrismaClient();
  return await prisma.bugBashSession.findMany({
    where,
  });
};
