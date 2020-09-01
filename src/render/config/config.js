import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  proxy: {
    '/api': {
      target: 'https://XXX.net',
      changeOrigin: true,
    },
  },
  routes,
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    hmr: true,
  },
})
