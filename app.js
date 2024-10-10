import express from "express";

const app = express()

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// import routes from routes folder once created!

import router from "./routes/routes.js"

app.use("/", router)
export {app}