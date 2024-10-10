import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"

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

export {
    homeHandler
}