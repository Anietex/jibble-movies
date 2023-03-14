<template>
  <main>
    <div class="container">
      <app-header @on-search="handleSearch" />
      <div v-if="isLoading">
        <p>Loading...</p>
      </div>
      <div class="content" v-else>
        <v-tabs active-class="active-tab" v-model="tab" bg-color="none" align-tabs="start">
          <v-tab value="all-movies" class="all-movies-tab-action">All Movies</v-tab>
          <v-tab value="favourites" class="favourites-tab-action">Favorites</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="all-movies" class="all-movies-tab">
            <movies-list title="All Movies" :movies="movies" />
            <div class="pagination">
              <v-pagination :length="moviesMeta?.total_pages" v-model="page"></v-pagination>
            </div>
          </v-window-item>
          <v-window-item value="favourites" class="favourite-movies-tab">
            <movies-list title="Favorite Movies" :movies="favouritesMovies" />
          </v-window-item>
        </v-window>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import AppHeader from '@/components/home/AppHeader.vue'
import MoviesList from '@/components/home/MoviesList.vue'
import { useMovies } from '@/composable/useMovies'
import { onMounted, defineComponent } from 'vue'
import { useMovieStore } from '@/stores/movie'

export default defineComponent({
  data: () => ({
    tab: 'all-movies'
  }),
  setup() {
    const movieStore = useMovieStore()
    const { fetchMovies, movies, page, moviesMeta, isLoading, filterTitle } = useMovies()

    onMounted(() => {
      fetchMovies({ page: 1 })
    })

    const handleSearch = (value: string) => filterTitle.value = value

    return {
      movies,
      page,
      moviesMeta,
      isLoading,
      handleSearch,
      favouritesMovies: movieStore.favourites
    }
  },
  components: {
    MoviesList,
    AppHeader
  }
})
</script>
<style lang="scss">
.pagination {
  margin-top: 20px;
}
</style>
