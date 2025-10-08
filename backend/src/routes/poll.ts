import { Router } from 'express';
import { createPoll, getPollBySlug } from '../controllers/polls';
const pollsRouter = Router()

pollsRouter.get('/:slug', getPollBySlug);
pollsRouter.post('', createPoll);
pollsRouter.delete('', () => { })
pollsRouter.put('', () => { })


export default pollsRouter


