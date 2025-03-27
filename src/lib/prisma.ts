import {PrismaClient} from '@prisma/client'

const globalforPrisma = global as unknown as {prisma?: PrismaClient}

function makeClient() {
 return new PrismaClient({log: ['error','info', 'warn']})
}
export const prisma = globalforPrisma.prisma || makeClient()

if (process.env.NODE_ENV !== 'production') {
  globalforPrisma.prisma = prisma
}