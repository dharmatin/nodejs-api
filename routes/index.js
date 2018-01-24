import listingRouter from './routers/listing';
import express from 'express';

export default (app) => {
  const router = express.Router();
  router.use('/listing', listingRouter);
  app.use('/v1', router);
};