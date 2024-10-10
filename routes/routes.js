import { Router } from "express";
import {
    homeHandler,
    getStats
} from "../controllers/controllers.js"

const router = Router()

// Route for homepage
router.route("/").get(homeHandler)

// GET /stats?coin=bitcoin
router.route("/stats").get(getStats)

export default router