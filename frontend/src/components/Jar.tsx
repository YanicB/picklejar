import Idea from './Idea'
type ideaItem = {
    id: string;
    text: string;
    authorName?: string | null;
    createdAt?: string;
};
const Jar = ({ ideas }: { ideas: ideaItem[] }) => {
    if (!ideas?.length) return <p>No ideas yet.</p>
    return (
        <ul className="w-100 h-100 bg-gray-300">
            {ideas.map((idea: any) => (
                <li key={idea.id}>
                    <Idea text={idea.text} />
                </li>
            ))}
        </ul>
    );
}
export default Jar
