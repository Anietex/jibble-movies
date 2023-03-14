import { ref } from 'vue'
import type { GetMovieQuery, Movie, MoviesMeta } from '@/services/api/movies-api'
import { implementsMoviesApiResponse, moviesApi } from '@/services/api/movies-api'
import type { AxiosError } from 'axios'
import { watch } from 'vue'

export function useMovies() {
  const movies = ref<Movie[]>([])
  const moviesMeta = ref<MoviesMeta>()
  const apiError = ref<AxiosError>()
  const isLoading = ref<boolean>(true)
  const filterTitle = ref<string>('')
  const page = ref<number>()

  const fetchMovies = async (query: GetMovieQuery): Promise<void> => {
    apiError.value = undefined
    isLoading.value = true
    const moviesApiResponse = await moviesApi.getMovies(query)
    if (implementsMoviesApiResponse(moviesApiResponse)) {
      movies.value = moviesApiResponse.data
      moviesMeta.value = moviesApiResponse as MoviesMeta
    } else {
      apiError.value = moviesApiResponse
    }

    isLoading.value = false
  }

  const getPage = async (page: number) => {
    await fetchMovies({ page })
  }

  watch(page, async () => {
    await fetchMovies({ page: page.value })
  })

  watch(filterTitle, async () => {
    const title = filterTitle.value === '' ? undefined : filterTitle.value
    await fetchMovies({ title })
  })

  return {
    fetchMovies,
    getPage,
    movies,
    moviesMeta,
    apiError,
    page,
    isLoading,
    filterTitle
  }
}
