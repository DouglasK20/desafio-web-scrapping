import 'express-async-errors'
import { Router } from "express";
import { web } from "../controllers/web";

const router = Router();

router.post('/noticia_g1', web)

export default router;