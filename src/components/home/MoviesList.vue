<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
  </div>
  <div class="movies movies-list">
    <movie-card :key="i" color="primary" v-for="(movie, i) in movies" :movie="movie" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import MovieCard from '@/components/home/MovieCard.vue'
import type { Movie } from '@/services/api/movies-api'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoviesList',
  components: { MovieCard },
  props: {
    title: {
      required: true,
      type: String
    },
    movies: {
      required: true,
      type: Array as PropType<Movie[]>
    }
  }
})
</script>

<style scoped lang="scss">
.section-title {
  padding: 10px;
}
.movies {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
