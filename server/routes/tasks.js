import express from "express";

import {getTasks} from '../controllers/Tasks.js'
const router = express.Router()

router.get('/', getTasks)


export default router;