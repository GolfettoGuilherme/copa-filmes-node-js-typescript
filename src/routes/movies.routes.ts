import {Router, Request, Response} from 'express';
import MoviesServices from '../services/moviesServices';

const moviesRouter = Router();

moviesRouter.get('/', async (request: Request, response: Response) => {

  const service = new MoviesServices();

  const movies = await service.execute();

  return response.json(movies);
});

export default moviesRouter;
