import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { Coin } from "../models/Coin.js"

// Home Handler
const homeHandler = asyncHandler(async (req, res) => {
    try {
        return res
        .status(200)
        .json(
            new ApiResponse(
                200, {}, "Welcome to HomePage of Crypto Assignment!"
            )
        )
    } catch (error) {
        throw new ApiError(401, "Didn't Reach Homepage")
    }
})

// Get Stats Handler
const getStats = asyncHandler(async (req, res) => {
    const { coin } = req.query

    if (!coin) {
        throw new ApiError(400, "Coin parameter is required")
    }

    const latestRecord = await Coin.findOne({ coin }).sort({ createdAt: -1 })
    if (!latestRecord) {
        throw new ApiError(404, `Data for ${coin} not found`)
    }

    return res.status(200).json({
            price: latestRecord.price,
            marketCap: latestRecord.marketCap,
            "24hChange": latestRecord.change
    })
})

export {
    homeHandler, 
    getStats
}