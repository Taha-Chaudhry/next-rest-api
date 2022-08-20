import { raiseError } from '../../../components/errorHandling';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Users(req, res) {
    const { id } = req.query
    const users = await prisma.user.findMany();
    if (req.method != "GET") return res.json(raiseError(4))
    raiseError(4)
    if (!users[id - 1]) return res.json(raiseError(3))
    
    res.status(200).json(users[id - 1])
}