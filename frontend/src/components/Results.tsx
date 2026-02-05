type ResultItem = {
    ideaId: number;
    text: string;
    count: number;
};

type ResultsProps = {
    totals: ResultItem[];
    participantCount: number;
};

const Results = ({ totals, participantCount }: ResultsProps) => {
    const sortedTotals = [...totals].sort((a, b) => b.count - a.count);
    const maxVotes = sortedTotals.length > 0 ? sortedTotals[0].count : 0;

    return (
        <div>
            <h2>Results</h2>
            <p>{participantCount} {participantCount === 1 ? 'person' : 'people'} voted</p>

            {sortedTotals.length === 0 ? (
                <p>No votes were cast.</p>
            ) : (
                <div>
                    {sortedTotals.map((result, index) => {
                        const isWinner = result.count === maxVotes && maxVotes > 0;
                        return (
                            <div key={result.ideaId}>
                                <p>
                                    {isWinner && index === 0 && '🏆 '}
                                    {result.text}
                                </p>
                                <p>
                                    {result.count} {result.count === 1 ? 'vote' : 'votes'}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Results;
