// my first api
// this returns json data

const express = require('express');
const app = express();

// get the port (render gives us this)
const PORT = process.env.PORT || 10000;

// root route
app.get('/', (req, res) => {
  res.json({
    message: 'welcome to my api!',
    version: '1.0.0',
    author: 'me'
  });
});

// get users (fake data)
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'jane' },
    { id: 3, name: 'bob' }
  ];
  res.json(users);
});

// get a single user
app.get('/users/:id', (req, res) => {
  // just return the id they asked for
  res.json({
    id: req.params.id,
    name: 'some user',
    email: 'user@email.com'
  });
});

// health check (render needs this maybe?)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`api running on port ${PORT}`);
});
