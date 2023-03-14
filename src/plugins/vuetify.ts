import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const movieTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#3B384B',
    secondary: '#D8D6D8',
    accent: '#F4894F',
    error: '#D1002B',
    info: '#3B3849',
    success: '#6D4E46',
    warning: '#554747',
    'raisin-black': '#1B1927',
    timberwolf: '#D8D6D8',
    jet: '#3B3849',
    wenge: '#554747',
    'raisin-black-2': '#1A1826',
    liver: '#6D4E46',
    'atomic-tangerine': '#F4894F',
    'english-violet': '#3B384B',
    'fire-engine-red': '#D1002B',
    'raisin-black-3': '#2A2738'
  }
}

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'movieTheme',
    themes: {
      movieTheme
    }
  },
  components,
  directives
})
