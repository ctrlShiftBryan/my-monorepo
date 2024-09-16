import express from 'express';

const app = express();
const port = process.env.PORT || 4300; // Use 4300 for preview

app.get('/', (_req, res) => {
  res.send('Hello from Express with Vite!');
});

// Start the server if we're not in development mode or if we're running preview
if (process.env.NODE_ENV !== 'development' || process.env.PREVIEW) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export const viteNodeApp = app;
