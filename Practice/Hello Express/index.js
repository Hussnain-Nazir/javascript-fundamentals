const express = require('express');
const app = express();
const PORT = 3000;

// Returns a simple text greeting
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Returns a small JSON response
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
