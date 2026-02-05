import { getPoll, newIdea, startVoting, castVote, getResults } from '../services/polls';
import Collecting from '../components/Collecting';
import Voting from '../components/Voting';
import Closed from '../components/Closed';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PollsPage = () => {
    const { slug } = useParams();
    const [ideas, setIdeas] = useState([]);
    const [title, setTitle] = useState('');
    const [phase, setPhase] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [addIdea, setAddIdea] = useState('');
    const [participantName, setParticipantName] = useState('');
    const [hasVoted, setHasVoted] = useState(false);
    const [totals, setTotals] = useState<{ ideaId: number; text: string; count: number }[]>([]);
    const [participantCount, setParticipantCount] = useState(0);

    const fetchPoll = async () => {
        try {
            if (!slug) return;

            const res = await getPoll(slug);
            if (res.ideas) {
                setIdeas(res.ideas);
            }
            setPhase(res.phase);
            setTitle(res.title);

            if (res.phase === 'CLOSED') {
                const resultsRes = await getResults(slug);
                setTotals(resultsRes.totals);
                setParticipantCount(resultsRes.participantCount);
            }
        } catch (err: any) {
            setError('Poll not found');
        } finally {
            setLoading(false);
        }
    }

    const votePhase = async () => {
        const manageToken = localStorage.getItem(`poll_${slug}_token`);
        if (!manageToken) return;
        if (!slug) return;
        const res = await startVoting(slug, manageToken);
        setPhase(res.phase);
    }

    const handleVote = async (ideaId: number) => {
        if (!slug || !participantName.trim()) {
            alert('Please enter your name first');
            return;
        }

        try {
            await castVote(slug, {
                name: participantName,
                email: undefined
            }, ideaId);

            localStorage.setItem(`poll_${slug}_voted`, 'true');

            setHasVoted(true);
            alert('Vote cast succesfully.');
        } catch (err) {
            alert('Failed to cast vote.');
        }
    }
    useEffect(() => {
        fetchPoll();
        const voted = localStorage.getItem(`poll_${slug}_voted`);
        if (voted) setHasVoted(true);
    }, [slug]);


    const handleAddIdea = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!slug) return;
        const res = await newIdea(addIdea, slug);
        setIdeas(ideas.concat(res));
        setAddIdea('');
    }

    const handleIdeaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddIdea(e.target.value);
    }

    const handleParticipantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParticipantName(e.target.value);
    }

    if (!slug) {
        return <div>Invalid Poll</div>
    }

    if (loading) return <div>Loading...</div>

    return (
        <section className="h-screen w-auto">
            {title}
            {phase === 'COLLECTING' && (<Collecting slug={slug} votePhase={votePhase} listIdeas={ideas} addIdea={addIdea} handleIdeaChange={handleIdeaChange} idea={handleAddIdea} />)}
            {phase === 'VOTING' && (<Voting hasVoted={hasVoted} participantChange={handleParticipantChange} ideas={ideas} handleVote={handleVote} />)}
            {phase === 'CLOSED' && (<Closed totals={totals} participantCount={participantCount} />)}
        </section>
    )
}

export default PollsPage

