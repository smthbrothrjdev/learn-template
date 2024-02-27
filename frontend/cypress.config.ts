import * as  path from 'path'
import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
    e2e: {
        setupNodeEvents(on) {
            // @ts-ignore
            on(
                'file:preprocessor',
                vitePreprocessor({
                    configFile: path.resolve(new URL('.', import.meta.url).pathname, './vite.config.ts'),
                    mode: 'development',
                }),
            )
        },
    },
})
