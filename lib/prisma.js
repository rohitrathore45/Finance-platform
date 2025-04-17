import { PrismaClient } from '../lib/generated/prisma'

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;


// globalThis.prisma: this global variable ensures that the prisma client instance is
//reused across hot reloads during development. Without this, each time your application
//reloads, a new instance of the prisma client would created, potentially leading
//to connection issues.