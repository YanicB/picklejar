import Jar from './Jar'

type CollectingProps = {
    addIdea: string,
    handleIdeaChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    idea: (e: React.FormEvent) => Promise<void> | void,
    listIdeas: any[],
    votePhase: any,
    slug: string;
}

const Collecting = ({ slug, votePhase, addIdea, handleIdeaChange, idea, listIdeas }: CollectingProps) => {
    const manageToken = localStorage.getItem(`poll_${slug}_token`);


    return (
        <div className="flex justify-center items-center">
            {manageToken && <button onClick={votePhase}>Start Vote</button>}
            <Jar ideas={listIdeas} />
            <form onSubmit={idea}>
                <label>
                    Idea
                    <input
                        type="text"
                        value={addIdea}
                        onChange={handleIdeaChange}
                    />
                </label>
                <button type='submit'>
                    Add Idea
                </button>
            </form>
        </div>
    )
}

export default Collecting;
