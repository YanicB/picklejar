import axios from 'axios'
const baseUrl = '/api'

export const newPoll = async (title: string) => {
    const res = await axios.post(`${baseUrl}/polls`, {
        title: title,
    });
    return res.data; //{poll, manageToken, shareUrl}
}

export const getPoll = async (slug: string) => {
    const res = await axios.get(`${baseUrl}/polls/${slug}`);
    return res.data; // {title, phase, ideas: []}
}

export const newIdea = async (text: string, slug: string) => {
    const res = await axios.post(`${baseUrl}/polls/${slug}/ideas`, {
        text: text,
    });
    return res.data; // {id, text, authorName, createdAt}
}

