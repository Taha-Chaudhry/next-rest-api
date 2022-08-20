import { prisma } from "../../lib/prisma";

export default async function Api(_req, res) {
    const users = await prisma.user.findMany();

    res.status(200).json(users)
}