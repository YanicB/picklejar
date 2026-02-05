import { Request, Response } from 'express'
import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient();

export const castVote = async (req: Request, res: Response) => {
    try {
        const slug = req.params.slug;
        const { participant, ideaId } = req.body;
        if (!participant || !participant.name || typeof participant.name !== "string") {
            return res.status(400).json({ error: "Participant name is required." })
        }

        if (!ideaId || typeof ideaId !== "number") {
            return res.status(400).json({ error: "valid ideaId is required" });
        }

        const poll = await prisma.poll.findUnique({
            where: { slug },
        });
        if (!poll) {
            return res.status(404).json({ error: "Poll not found" });
        }

        if (poll.phase !== "VOTING") {
            return res.status(403).json({ error: "poll is not in voting phase." });
        }
        const idea = await prisma.idea.findFirst({
            where: {
                id: ideaId,
                pollId: poll.id,
            },
        });

        if (!idea) {
            return res.status(400).json({ error: "Invalid idea for this poll" });
        }

        const participantName = participant.name.trim();
        const participantEmail = participant.email ? participant.email.trim() : undefined;

        const participantRecord = await prisma.participant.upsert({
            where: {
                pollId_name: {
                    pollId: poll.id,
                    name: participantName,
                },
            },
            update: {
                email: participantEmail,
            },
            create: {
                pollId: poll.id,
                name: participantName,
                email: participantEmail,
            },
        });

        await prisma.vote.upsert({
            where: {
                pollId_participantId: {
                    pollId: poll.id,
                    participantId: participantRecord.id,
                },
            },
            update: {
                ideaId: ideaId,
            },
            create: {
                pollId: poll.id,
                participantId: participantRecord.id,
                ideaId: ideaId,
            },
        });


        return res.status(200).json({ ok: true });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Error occured." });
    }
}

//find poll
//get vote counts
//get idea details to include text
//combine vote counts with idea text
//count unique participants who voted
export const getResults = async (req: Request, res: Response) => {
    try {
        const slug = req.params.slug;
        const poll = await prisma.poll.findUnique({
            where: { slug }
        });

        if (!poll) {
            return res.status(403).json({ error: "Could not find poll." });
        }

        const voteCounts = await prisma.vote.groupBy({
            by: ['ideaId'],
            where: { pollId: poll.id },
            _count: { ideaId: true }
        });

        const ideas = await prisma.idea.findMany({
            where: { pollId: poll.id },
        })

        const totals = voteCounts.map(vc => {
            const idea = ideas.find(i => i.id === vc.ideaId);
            return {
                ideaId: vc.ideaId,
                text: idea?.text || '',
                count: vc._count.ideaId,
            };
        });

        const participantCount = await prisma.vote.count({
            where: { pollId: poll.id },
        });

        return res.status(200).json({
            phase: poll.phase,
            totals,
            participantCount,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Error occured." });
    }
}



