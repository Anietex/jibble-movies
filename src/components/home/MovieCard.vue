<template>
  <v-card>
    <v-card-item>
      <div class="movie movie-item">
        <div class="image">
          <span> {{ image }}</span>
        </div>

        <div class="details">
          <div class="title-year">
            <h3 data-test-title>{{ props?.movie.Title }}</h3>
            <p data-test-year>{{ props?.movie.Year }}</p>
          </div>
          <div class="meta">
            <span data-test-imdbID>IMDB: {{ props?.movie.imdbID }}</span>
            <v-btn
              @click="toggleFavorite"
              size="small"
              variant="text"
              icon="mdi-heart"
              class="add-to-favorite"
              :color="favoriteIndex > -1 ? 'red' : 'default'"
            />
          </div>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import type { Movie } from '@/services/api/movies-api'
import { useMovieStore } from '@/stores/movie'

const movieStore = useMovieStore()
const props = defineProps<{ movie: Movie }>()

const image = computed(() => {
  const chars: string[] = props.movie.Title.split('')
  return (chars[0] + chars[1]).toUpperCase()
})

const favoriteIndex = computed(() => {
  return movieStore.favourites.findIndex((movie) => movie.imdbID === props.movie.imdbID)
})

const toggleFavorite = (): void => {
  const index = favoriteIndex.value
  let movies = movieStore.favourites
  if (index > -1) {
    movies.splice(index, 1)
  } else {
    movies.push(props.movie)
  }
  movieStore.$patch({ favourites: movies })
}
</script>

<style scoped lang="scss">
.movie {
  display: flex;

  .image {
    display: flex;
    padding: 30px;
    font-size: 80px;
    height: 150px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    position: relative;
  }

  .favorite-icon {
    cursor: pointer;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;

    .title-year {
      h3 {
        font-size: 30px;
      }
    }

    .meta {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
