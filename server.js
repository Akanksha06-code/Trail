require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],

    })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
);