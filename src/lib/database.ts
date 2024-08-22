import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createEvent(event: Prisma.eventCreateInput) {
  return await prisma.event.create({
    data: event,
  });
}

export async function getEvent(id: string) {
  return await prisma.event.findUnique({
    where: {
      id,
    },
  });
}

export async function getEvents() {
  return await prisma.event.findMany();
}

export async function updateEvent(id: string, event: Prisma.eventUpdateInput) {
  return await prisma.event.update({
    where: {
      id,
    },
    data: event,
  });
}

export async function deleteEvent(id: string) {
  return await prisma.event.delete({
    where: {
      id,
    },
  });
}

export async function getFeature(id: string) {
  return await prisma.feature.findUnique({
    where: {
      id,
    },
  });
}

export async function createFeature(feature: Prisma.FeatureCreateInput) {
  return await prisma.feature.create({
    data: feature,
  });
}

export async function getFeatures() {
  return await prisma.feature.findMany();
}

export async function updateFeature(id: string, feature: Prisma.FeatureUpdateInput) {
  return await prisma.feature.update({
    where: {
      id,
    },
    data: feature,
  });
}

export async function deleteFeature(id: string) {
  return await prisma.feature.delete({
    where: {
      id,
    },
  });
}