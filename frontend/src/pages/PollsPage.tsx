import Jar from '../components/Jar';
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
            {loading ? (
                <h3>Loading...</h3>
            ) :
                <div>
                    {title}
                    {phase}
                    <Jar ideas={ideas} />
                </div>
            }
        </div>
    )
}

export default PollsPage
