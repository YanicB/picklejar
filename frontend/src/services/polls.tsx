import axios from 'axios'
const baseUrl = 'api/polls'

export const newPoll = async ({ title }: { title: string }) => {
    const res = await axios.post(baseUrl, {
        title: title,
    });
    return res.data; //{poll, manageToken, shareUrl}
}

export const getPoll = async (slug: string) => {
    const res = await axios.get(`${baseUrl}/${slug}`);
    return res.data; // {title, phase, ideas: []}
}

