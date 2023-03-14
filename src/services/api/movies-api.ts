import { http } from '@/services/api/common/http'
import type { AxiosError } from 'axios'

export interface Movie {
  Title: string
  Year: number
  imdbID: string
}

export interface MoviesApiResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Movie[]
}

export type MoviesMeta = Omit<MoviesApiResponse, 'data'>

export function implementsMoviesApiResponse(
  obj: MoviesApiResponse | AxiosError
): obj is MoviesApiResponse {
  return 'page' in obj && 'per_page' in obj && 'data' in obj
}

export interface GetMovieQuery {
  page?: number
  title?: string
}

export const moviesApi = {
  async getMovies(getQuery: GetMovieQuery): Promise<MoviesApiResponse | AxiosError> {
    try {
      const { data } = await http.get<MoviesApiResponse>('/movies', {
        params: {
          Title: getQuery.title,
          page: getQuery.page
        }
      })
      return data
    } catch (error) {
      return error as AxiosError
    }
  }
}
