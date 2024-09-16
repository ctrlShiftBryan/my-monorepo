import { test, expect } from '@playwright/test';

test('server responds with correct message', async ({ page }) => {
  await page.goto('http://localhost:4300');

  // Expect the page content to contain the server's response
  const pageContent = await page.textContent('body');
  expect(pageContent).toBe('Hello from Express with Vite!');
});
