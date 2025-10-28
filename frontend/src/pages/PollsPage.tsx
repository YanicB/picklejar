import Jar from '../components/Jar';
import { getPoll, newIdea, startVoting, castVote } from '../services/polls';
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

    const fetchPoll = async () => {
        try {
            if (!slug) return;

            const res = await getPoll(slug);
            if (res.ideas) {
                setIdeas(res.ideas);
            }
            setPhase(res.phase);
            setTitle(res.title);
        } catch (err: any) {
            setError('Poll not found');
        } finally {
            setLoading(false);
        }
    }

    const votePhase = async () => {
        const manageToken = localStorage.getItem(`poll_${slug}_token`);
        if (!manageToken) {
            alert("You don't have permission to start voting phase.");
            return;
        }
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
                email: participantName || undefined
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

    const idea = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!slug) return;
        const res = await newIdea(addIdea, slug);
        setIdeas(ideas.concat(res));
        setAddIdea('');
    }

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center">
                <p className="text-xl text-gray-600">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-red-600 mb-4">{error}</p>
                    <a href="/" className="text-primary hover:underline">
                        Go back home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen flex items-center justify-center py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                        Phase: {phase}
                    </p>
                </div>
        </section>
    )
}

export default PollsPage

