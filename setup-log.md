nx add @nx/vite
pnpm exec nx generate @nx/web:application --name=express-app --bundler=vite --directory=apps/express-app --projectNameAndRootFormat=as-provided --unitTestRunner=vitest --no-interactive
