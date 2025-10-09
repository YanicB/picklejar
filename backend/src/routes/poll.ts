import { Router } from 'express';
import { createPoll, getPollBySlug } from '../controllers/polls';
import { addIdea } from '../controllers/ideas'
const pollsRouter = Router()

pollsRouter.get('/:slug', getPollBySlug);
pollsRouter.post('', createPoll);
pollsRouter.delete('', () => { })
pollsRouter.put('', () => { })
pollsRouter.post('/:slug/ideas', addIdea);

export default pollsRouter


