import { Router } from "express";
import {
    homeHandler,
    getStats,
    getDeviation
} from "../controllers/controllers.js"

const router = Router()

// Route for homepage
router.route("/").get(homeHandler)

// GET /stats?coin=bitcoin
router.route("/stats").get(getStats)

// Deviation route: GET /deviation?coin=<coin_id>
router.route("/deviation").get(getDeviation)

export default router