import Results from './Results';

type ResultItem = {
    ideaId: number;
    text: string;
    count: number;
};

type ClosedProps = {
    totals: ResultItem[];
    participantCount: number;
};

const Closed = ({ totals, participantCount }: ClosedProps) => {
    const sortedTotals = [...totals].sort((a, b) => b.count - a.count);
    const winner = sortedTotals.length > 0 && sortedTotals[0].count > 0
        ? sortedTotals[0]
        : null;

    return (
        <div>
            <h2>Poll Closed</h2>

            {winner && (
                <div>
                    <h3>Winner</h3>
                    <p>{winner.text}</p>
                    <p>{winner.count} {winner.count === 1 ? 'vote' : 'votes'}</p>
                </div>
            )}

            <Results totals={totals} participantCount={participantCount} />
        </div>
    );
};

export default Closed;
