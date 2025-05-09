// index.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Simple “Hello World” endpoint
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// Start the server (only used in local/dev mode)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

export default app;
