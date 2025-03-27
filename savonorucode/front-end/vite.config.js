import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production';



    return {
        plugins: [react()],
        resolve: {
            alias: {
              '@': '/src',
            },
          },
        server: {
            proxy: {
                '/api': {
                    target: process.env.VITE_API_URL,
                    changeOrigin: true,
                    secure: false,
                },
                '/login': {
                    target: process.env.VITE_API_URL,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        define: {
            'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
        }
    }
})
