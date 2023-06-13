const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const ErrorMiddleware = require("./middleware/errors");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieparser());
// import all product
const products = require("./Routes/product");
const auth = require("./Routes/auth");
const order = require("./Routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

//  Middleware to handle errors
app.use(ErrorMiddleware);

module.exports = app;
