import express from 'express';
import itemRouter from './resources/item/item.router.js';
const app = express();
const PORT = 3000;

app.disable('x-powered-by');
app.use(express.json());

app.use('/api/item', itemRouter);

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

server.on('error', console.error);
