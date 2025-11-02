type VotingProps = {
    ideas: any[],
    handleVote: any,
    participantChange: any,
    hasVoted: boolean,
}
const Voting = ({ hasVoted, participantChange, ideas, handleVote }: VotingProps) => {
    return (
        <div>
            {hasVoted ? (<div>You have already voted</div>) : (
                <div>
                    <p>
                        Add name and vote on idea:
                    </p>
                    <form>
                        <input
                            type="text"
                            onChange={participantChange}
                            placeholder="Add name..."
                        />
                    </form>
                    {ideas.map((idea: any) => (
                        <button
                            key={idea.id}
                            onClick={() => handleVote(idea.id)}
                        >
                            <p>{idea.text}</p>
                        </button>
                    ))}
                </div>)
            }
        </div>
    )
}

export default Voting;
