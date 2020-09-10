import IMovie from '../models/IMovie';
import api from './api';

class MoviesServices {

  public async execute() : Promise<IMovie[]> {

    const response = await api.get<IMovie[]>('/api/filmes');

    if(response.status !== 200)
      throw new Error('Falha ao buscar os filmes, tente novamente mais tarde');

    return response.data;
  }
}

export default MoviesServices;
