import { prisma } from "../../../lib/prisma";
import { raiseError } from "../../../components/errorHandling";

export default async function DeleteUserById(req, res) {
    const { id } = req.query
    const users = await prisma.user.findMany()
    
    if (req.method != "GET") return res.status(403).json(raiseError(4))
    if (!users[id - 1]) return res.status(403).json(raiseError(3))
    
    await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    })
    
    res.json(await prisma.user.findMany())
}