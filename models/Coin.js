import mongoose from "mongoose";

const coinStatSchema = new mongoose.Schema({
    coin: {
        type : String,
        required : true,
    },
    price: {
        type : Number,
        required : true,
    },
    marketCap: {
        type : Number,
        required : true,
    },
    change: {
        type : Number,
        requierd : true,
    }
},
{
    timestamps : true
}
)

export const Coin = mongoose.model("Coin", coinStatSchema) 