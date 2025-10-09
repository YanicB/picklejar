//TODO make update idea function, delete idea function
import { PrismaClient } from '../../generated/prisma';
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const addIdea = async (req: Request, res: Response) => {
    try {
        const slug = req.params.slug;
        const poll = await prisma.poll.findUnique({
            where: {
                slug,
            },
        });
        if (!poll) return res.status(404).json({ error: "poll not found." });
        if (poll.phase != "COLLECTING") {
            return res.status(403).json({ error: "ideas can only be added during collection phase" });
        }

        const textRaw = req.body?.text;
        const authorRaw = req.body?.author;

        const text = typeof textRaw === "string" ? textRaw.trim() : "";
        if (!text) {
            return res.status(400).json({ error: "text cannot be empty." });
        }
        const authorName = typeof authorRaw === "string" ? authorRaw.trim() : "anomymous";

        const idea = await prisma.idea.create({
            data: {
                pollId: poll.id,
                text,
                authorName,
            },
        });

        return res.status(201).json({
            id: idea.id,
            text: idea.text,
            authorName: idea.authorName,
            createdAt: idea.createdAt,
        });

    } catch (err) {
        return res.status(500).json({ error: "error occured." });
    }
}


