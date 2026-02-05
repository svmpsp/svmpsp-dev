import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup.ts'],
    globalSetup: ['./src/tests/global-setup.ts'],
    env: {
      DATABASE_URL: 'file:./test.db',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      include: ['src/**/*.{ts,js,svelte}'],
      exclude: [
        'src/tests/**',
        'src/routes/**',
        'src/**/*.{test,spec}.{ts,js.svelte}',
        '**/*.d.ts',
      ],
    },
  },
  resolve: {
    conditions: ['browser'],
  },
});
