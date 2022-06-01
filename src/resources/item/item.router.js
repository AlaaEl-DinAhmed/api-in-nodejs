import { Router } from 'express';

const itemRouter = Router();

itemRouter
  .route('/')
  .get((req, res) => {
    res.send({ data: 'DATA' });
  })
  .post((req, res) => {});

itemRouter
  .route('/:id')
  .put((req, res) => {})
  .delete((req, res) => {})
  .get((req, res) => {});

export default itemRouter;
