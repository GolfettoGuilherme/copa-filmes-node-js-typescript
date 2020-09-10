import { Router } from 'express';
import championshipRoute from './championship.routes';
import moviesRouter from './movies.routes';

const routes = Router();

routes.use('/championship', championshipRoute);
routes.use('/movies', moviesRouter);

export default routes;
