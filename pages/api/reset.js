import { prisma } from "../../lib/prisma";

export default async function Reset(req, res) {
    if (req.method != "GET") return res.status(403).json(raiseError(4))

    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "john@example.com",
            id: 1
        },
    });

    res.json(user)
}