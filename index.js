import dotenv from "dotenv"
import cron from "node-cron"
import connectDB from "./db/index.js"
import { app } from "./app.js"
import fetchCryptoData from "./controllers/fetchDataCoinGecko.js"

dotenv.config()

connectDB()
.then(() => {
    // Schedule the fetchCryptoData job to run every 2 hours
    cron.schedule("0 */2 * * *", () => {
        console.log("Crypto data fetched!");        
        fetchCryptoData();
    }).start()

    // Start the server
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MongoDB connection failed or App failed!!!", err);
})