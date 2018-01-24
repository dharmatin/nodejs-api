import express from 'express';
import { getAllListings, getListingById } from '../../controllers/listing';

const router = express.Router();

router.get('/', getAllListings);
router.get('/:id', getListingById);

export default router;
