import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MoviesList from '../../home/MoviesList.vue'
import type { Movie } from '@/services/api/movies-api'
import { store } from '@/plugins/store'
import { vuetify } from '@/plugins/vuetify'
import MovieCard from '../../home/MovieCard.vue'

describe('MoviesList', () => {
  const movies: Movie[] = [
    {
      Title: 'Waterworld',
      Year: 1995,
      imdbID: 'tt0114898'
    },
    {
      Title: 'Waterworld',
      Year: 1995,
      imdbID: 'tt0189200'
    },
    {
      Title: "The Making of 'Waterworld'",
      Year: 1995,
      imdbID: 'tt2670548'
    }
  ]

  it('renders properly', () => {
    const wrapper = mount(MoviesList, {
      props: {
        movies,
        title: 'Component Title'
      },
      global: {
        plugins: [store, vuetify]
      }
    })
    expect(wrapper.text()).toContain('Component Title')
    expect(wrapper.findAllComponents(MovieCard).length).toBe(3)
  })
})
