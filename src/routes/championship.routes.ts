import {Router, Request, Response} from 'express';
import ChampionshipServices from '../services/ChampionshipServices';

const championshipRouter = Router();

championshipRouter.post('/', async (request: Request, response: Response) => {
  try{
    const {ids} = request.body;

    const service = new ChampionshipServices();

    const winners = await service.execute(ids);

    return response.json(winners);

  } catch(err){
    return response.status(500).json(
    {
      status: 'error',
      message: err.message
    });
  }
});

export default championshipRouter;
