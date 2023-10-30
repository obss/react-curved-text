import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            include: '**/*.{js,jsx,tsx}',
        }),
    ],
    base: '/react-curved-text/',
    build: {
        outDir: 'storybook-dist',
    },
});
