import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { Coin } from "../models/Coin.js"
import calculateStandardDeviation from "../utils/statsUtils.js"

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

// Get deviation for currencies handler
const getDeviation = asyncHandler (async (req, res) => {
    try {
        const { coin } = req.query
    
        if (!coin) {
            throw new ApiError(400, "Coin parameter is required")
        }
    
        const records = await Coin.find({ coin }).sort({createdAt: -1}).limit(100)
    
        if (!records.length) {
            throw new ApiError(404, `Data for ${coin} not found`)
        }
    
        const prices = records.map(record => record.price)
        const deviation = calculateStandardDeviation(prices)
    
        return res.status(200).json({deviation})
    } catch (error) {
        throw new ApiError(500, "Internal Server Error into getDeviation route!")
    }
})

export {
    homeHandler, 
    getStats,
    getDeviation
}