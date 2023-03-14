import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MovieCard from '../../home/MovieCard.vue'
import {store} from "@/plugins/store";
import { vuetify } from "@/plugins/vuetify";

describe('MovieCard', () => {
  it('renders properly', () => {
    const movie = {
      Title: "Deep Waterworld",
      Year: 1995,
      imdbID: "tt0124365"
    }
    const wrapper = mount(MovieCard, {
      props: { movie },
      global: {
        plugins: [store, vuetify],
      }
    })
    expect(wrapper.text()).toContain(movie.Title);
    expect(wrapper.text()).toContain(movie.Year);
    expect(wrapper.text()).toContain(movie.imdbID);


  })
})
