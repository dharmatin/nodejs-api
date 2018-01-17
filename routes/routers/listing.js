import express from "express";
import { getAllListings } from "../../controllers/listing";

const router = express.Router();

router.get("/", getAllListings);

export default router;