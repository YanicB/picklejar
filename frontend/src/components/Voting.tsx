const Voting = () => {

    return (
        <div>
            <div>
                <p>Enter your details to vote</p>
                <input
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder="Your name (required)"
                    required
                />
            </div>
            <div>
                <p>
                    Click on an idea to vote for it:
                </p>
                {ideas.map((idea: any) => (
                    <button
                        key={idea.id}
                        onClick={() => handleVote(idea.id)}
                    >
                        <p>{idea.text}</p>
                    </button>
                ))}
            </div>
            )
        </div>
}

export default Voting;
