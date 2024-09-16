nx add @nx/vite
pnpm exec nx generate @nx/web:application --name=fastify-app --bundler=vite --directory=apps/fastify-app --projectNameAndRootFormat=as-provided --unitTestRunner=vitest --no-interactive
