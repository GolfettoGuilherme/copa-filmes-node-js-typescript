import IMovie from "../models/IMovie";
import MoviesServices from "./MoviesServices";

class ChampionshipServices {
  public async execute(idMovies : string[]): Promise<IMovie[]>{

    if(idMovies.length !== 8)
      throw new Error('Lista de filmes inválida, tente novamente');

    const moviesService = new MoviesServices();

    const movies = (await moviesService.execute()).filter(movie => idMovies.includes(movie.id));

    const winnersFirstRound = this.challenge(movies);

    const finalists = this.challenge(winnersFirstRound);

    const winner = this.challenge(finalists)[0];

    return [
      winner,
      finalists.filter(movie => movie.id !== winner.id)[0]
    ];
  }

  private challenge(movies: IMovie[]) : IMovie[]{
    const winners :IMovie[] = [];

    const sizeList = movies.length -1;

    for (let i = 0; i < sizeList / 2; i++) {
      const movie1 = movies[i];
      const movie2 = movies[sizeList - i];

      winners.push(this.runFight(movie1, movie2));
    }
    return winners;
  }

  private runFight(movie1: IMovie, movie2: IMovie): IMovie{
    if(movie1.nota == movie2.nota){

      if(movie1.titulo.localeCompare(movie2.titulo) <0)
        return movie1;
      else
        return movie2;

    } else if(movie1.nota > movie2.nota)
      return movie1;
    else
      return movie2;
  }
}


export default ChampionshipServices;
