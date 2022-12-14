import { prisma } from '../../../lib/prisma';
import { raiseError } from '../../../components/errorHandling';

export default async function UserById(req, res) {
    const { id } = req.query
    const users = await prisma.user.findMany()

    if (req.method != "GET") return res.status(403).json(raiseError(4))
    if (!users[id - 1]) return res.status(403).json(raiseError(3))
    
    const user = await prisma.user.findMany({
        where: {
            id: parseInt(id)
        }
    })

    res.status(200).json(user)
}