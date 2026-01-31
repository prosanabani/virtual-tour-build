import { defineConfig } from 'vite'
// import { devtools } from '@tanstack/devtools-vite' // Disabled due to R3F conflict
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'url'

import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  preview: {
    allowedHosts: true, // This allows all hosts
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    // devtools(), // Disabled due to conflict with React Three Fiber
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    viteReact(),
  ],
})

export default config
