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

export const startVoting = async (slug: string, manageToken: string) => {
    const res = await axios.post(`${baseUrl}/polls/${slug}/start-vote`, {}, {
        headers: {
            'x-manage-token': manageToken
        }
    });
    return res.data; // phase: {"VOTING"}
}

export const castVote = async (slug: string, participant: { name: string, email?: string }, ideaId: number) => {
    const res = await axios.post(`${baseUrl}/polls/${slug}/votes`, {
        participant,
        ideaId
    });
    return res.data // {ok: true}
}

export const getResults = async (slug: string) => {
    const res = await axios.get(`${baseUrl}/polls/${slug}/results`);
    return res.data; // {ok: true}
}

export const closePoll = async (slug: string, manageToken: string) => {
    const res = await axios.post(`${baseUrl}/polls/${slug}/close`, {}, {
        headers: {
            'x-manage-token': manageToken
        }
    });
    return res.data; // {phase, "CLOSED" } 
}
