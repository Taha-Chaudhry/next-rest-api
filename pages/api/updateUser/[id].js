import { prisma } from "../../../lib/prisma";
import { raiseError } from "../../../components/errorHandling";

export default async function UpdateUserById(req, res) {
    const { id } = req.query
    const { name, email } = req.body
    const users = await prisma.user.findMany();

    if (req.method != "PUT") return res.status(403).json(raiseError(6))
    if (!req.body) return res.status(403).json(raiseError(1))
    if (!name && !email) return res.status(403).json(raiseError(2))
    if (!users[id - 1]) return res.status(403).json(raiseError(3))
    
    if (!name && email == users[id - 1].email) return res.json(users[id - 1])
    if (name == users[id - 1].name && !email) return res.json(users[id - 1])
    if (name == users[id - 1].name && email == users[id - 1].email) return res.json(users[id - 1])

    const user = await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: name || users[id - 1].name,
            email: email || users[id - 1].email
        }
    });

    res.json(user)
}