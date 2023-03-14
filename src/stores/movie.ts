import { defineStore } from 'pinia'
import type { Movie } from '@/services/api/movies-api'

interface State {
  favourites: Movie[]
}

export const useMovieStore = defineStore('movie', {
  state: (): State => {
    return {
      favourites: []
    }
  },
  persist: true
})
