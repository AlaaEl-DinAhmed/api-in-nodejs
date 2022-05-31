import express from 'express';

const app = express();
const PORT = 3000;

app.disable('x-powered-by');

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

server.on('error', console.error);
