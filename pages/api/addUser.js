import { prisma } from "../../lib/prisma";
import { raiseError } from "../../components/errorHandling";

export default async function addUser(req, res) {
    const { name, email } = req.body

    if (req.method != "POST") return res.status(403).json(raiseError(5))
    if (!req.body) return res.status(403).json(raiseError(1))
    if (!name || !email) return res.status(403).json(raiseError(2))

    const users = await prisma.user.findMany();
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            id: users.length + 1
        },
    });

    res.json(user)
}