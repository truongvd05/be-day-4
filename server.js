require("dotenv").config();
require("module-alias/register");

var express = require("express");
var cors = require("cors");
const appRoute = require("@/routes");
const responseFormat = require("./src/middlewares/responseFormat");
const notFoundHandler = require("./src/middlewares/notFoundHandler");
const exceptionHandler = require("./src/middlewares/exceptionHandler");
var app = express();

const port = process.env.PORT || 3000;

const ALLOWED_ORIGIN = process.env.CLIENT_URL || "http://localhost:5173";

let allowMethods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"];

let corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (ALLOWED_ORIGIN.includes(origin)) {
            return callback(null, true);
        } else {
            callback(new Error("Not allow by cors"));
        }
    },
    methods: allowMethods,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(responseFormat);
app.use("/api", appRoute);
app.use(notFoundHandler);
app.use(exceptionHandler);

app.listen(port, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3000");
});
