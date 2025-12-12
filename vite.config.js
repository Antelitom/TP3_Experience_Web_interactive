import { defineConfig } from "vite";

export default defineConfig({
    base:'TP3_Experience_Web_interactive',
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});