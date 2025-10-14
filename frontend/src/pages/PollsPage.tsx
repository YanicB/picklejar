import Jar from '../components/Jar';
import SubmitIdea from '../components/SubmitIdea';
import { getPoll } from '../services/polls'
import { useState, useEffect } from 'react';

const PollsPage = () => {
    const [ideas, setIdeas] = useState([]);
    const [title, setTitle] = useState('');
    const [phase, setPhase] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchPoll = async () => {
        const res = await getPoll("v197boeb");
        if (res.ideas) {
            setIdeas(res.ideas);
        }
        setPhase(res.phase);
        setTitle(res.title);
        setLoading(false);
    }

    useEffect(() => {
        fetchPoll();
    }, []);

    return (
        <div>
            {ideas.map((idea: any) => (
                <li key={idea.id}>
                    {idea.text}
                </li>
            ))}
        </div>
    )
}

export default PollsPage
