import {fileURLToPath} from 'node:url'
import {mergeConfig} from 'vite'
import {configDefaults, defineConfig} from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            watch: false,
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./', import.meta.url)),
            // globalSetup: ["./src/tests/vitest.setup.ts"],
            deps: {
                inline: ['vuetify']
            }

        }
    })
)
