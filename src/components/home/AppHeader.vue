<template>
  <div class="header">
    <div class="branding">
      <span class="initials">JM</span>
      <span class="full-name"> Jibble Movies</span>
    </div>
    <div class="search">
      <input type="search" class="search-input" placeholder="Search" @input="handleInputChange" />
    </div>
  </div>
</template>

<script lang="ts">
import type { SetupContext } from 'vue'
import { debounce } from 'lodash'

export default {
  name: 'AppHeader',
  setup(_: any, ctx: SetupContext) {
    const handleInputChange = debounce((event: InputEvent) => {
      ctx.emit('on-search', event.target?.value)
    }, 500)

    return {
      handleInputChange
    }
  },
  emits: ['on-search']
}
</script>

<style scoped lang="scss">
.header {
  padding: 30px 0;
  display: flex;

  .branding {
    width: 120px;
    text-align: center;
  }

  .search {
    width: 100%;
    padding: 20px 40px;

    input {
      width: 100%;
      padding: 15px 30px;
      font-size: 15px;
      background: var(--english-violet);
      border-radius: 30px;
      border: none;
      box-shadow: none;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  .initials {
    display: block;
    font-size: 70px;
    font-weight: bold;
    margin: 0;
    line-height: 0.8;
  }
}
</style>
