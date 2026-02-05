import { Router } from 'express';
import { createPoll, getPollBySlug, startVoting, closePoll } from '../controllers/polls';
import { castVote, getResults } from '../controllers/votes';
import { addIdea } from '../controllers/ideas';

const pollsRouter = Router();

pollsRouter.get('/:slug', getPollBySlug);
pollsRouter.post('', createPoll);
pollsRouter.delete('', () => { })
pollsRouter.put('', () => { })
pollsRouter.post('/:slug/ideas', addIdea);
pollsRouter.post('/:slug/start-vote', startVoting);
pollsRouter.post('/:slug/votes', castVote);
pollsRouter.get('/:slug/results', getResults);
pollsRouter.post('/:slug/close', closePoll);

export default pollsRouter


