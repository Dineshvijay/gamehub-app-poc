import useData from './useData';
import { Genres } from './useGenres';
import { Platform } from './usePlatforms';


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number
  }

  export interface GameQuery {
    genres: Genres,
    platforms: Platform,
    sortOrder: string,
    searchText: string,
  }

const useGames = (gameQuery: GameQuery | null) => useData<Game>("/games",{
  params:{
    genres: gameQuery?.genres?.id,
    platforms: gameQuery?.platforms?.id,
    ordering: gameQuery?.sortOrder,
    search: gameQuery?.searchText

  }
},[gameQuery])

export default useGames