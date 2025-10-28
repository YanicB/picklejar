const Collecting = () => {
    return <div>
        phase === 'COLLECTING' && (
        <div>
            <Jar ideas={ideas} />
            <form onSubmit={idea}>
                <input
                    value={addIdea}
                    onChange={(e) => { setAddIdea(e.target.value) }}
                    placeholder="add idea..."
                />
                <button type="submit">Add idea</button>
            </form>
            {localStorage.getItem(`poll_${slug}_token`) && (
                <button onClick={votePhase}>Start Voting</button>
            )}
        </div>
        )
    </div>
}

export default Collecting;
