import { PrismaClient } from '../../generated/prisma'
import { customAlphabet } from "nanoid";
import crypto from "crypto";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz123456789", 8);

export const createPoll = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        if (!title || typeof (title) != "string") {
            return res.status(400).json({ error: "Title is require" });
        }
        const slug = nanoid();
        const manageToken = crypto.randomBytes(32).toString("hex");

        const poll = await prisma.poll.create({
            data: {
                title: title.trim(),
                slug,
                manageToken,
                phase: "COLLECTING"
            },
        });
        res.status(201).json({
            poll: {
                id: poll.id,
                title: poll.title,
                slug: poll.slug,
                phase: poll.phase,
                createdAt: poll.createdAt,
                updatedAt: poll.updatedAt,
            },
            manageToken,
            shareUrl: `${process.env.PUBLIC_BASE_URL || "http://localhost:3000"}/${slug}`,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong." });
    }
};

//get key (slug)
//look for slug in Polls table
//if it exists return json
//otherwise return 400, does not exist
export const getPollBySlug = async (req: Request, res: Response) => {
    try {
        const slug = req.params.slug;
        const poll = await prisma.poll.findUnique({
            where: {
                slug,
            },
            include: { ideas: true },
        });
        if (!poll) {
            return res.status(404).json({ error: "page not found." });
        }

        return res.status(200).json({
            title: poll.title,
            phase: poll.phase,
            ideas: poll.ideas,
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong." });
    }
}

export const startVoting = async (req: Request, res: Response) => {
    try {
        const slug = req.params.slug;
        const poll = await prisma.poll.findUnique({
            where: {
                slug,
            },
            include: { ideas: true },
        });
        if (!poll) {
            return res.status(404).json({ error: "poll does not exist." });
        }

        const token = req.headers['x-manage-token'];

        if (!token || typeof token !== "string") {
            return res.status(403).json({ error: "Missing manage token." });
        }
        if (poll.manageToken !== token) {
            return res.status(403).json({ error: "Invalid manage token." });
        }

        if (poll.phase !== "COLLECTING") {
            return res.status(400).json({ error: "Poll is not in collection phase." });
        }

        if (poll.ideas.length === 0) {
            return res.status(400).json({ error: "Cannot start voting with no ideas." });
        }

        const updatePoll = await prisma.poll.update({
            where: { id: poll.id },
            data: { phase: "VOTING" },
        });

        return res.status(200).json({ phase: updatePoll.phase });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong." });
    }
}

//TODO validate token, find poll, check token matches, check phase = voting, find winning idea, update phase to closed
export const closePoll = async (req: Request, res: Response) => {
    try {
        const slug = req.params.slug;
        const token = req.headers['x-manage-token'];
        if (!token || typeof token !== 'string') {
            return res.status(403).json({ error: "You do not have permission to modify poll." });
        }
        const poll = await prisma.poll.findUnique({
            where: { slug }
        });
        if (!poll) {
            return res.status(404).json({ error: "Poll not found." });
        }

        if (poll.manageToken !== token) {
            return res.status(403).json({ error: "invalid manage token" });
        }

        if (poll.phase !== "VOTING") {
            return res.status(403).json({ error: "Can only close poll in voting phase." });
        }

        const updatedPhase = await prisma.poll.update({
            where: { id: poll.id },
            data: { phase: 'CLOSED' },
        });

        return res.status(200).json({
            phase: updatedPhase.phase,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong." });
    }
}
