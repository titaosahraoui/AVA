const ErrorHandler = require("../utilities/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server Error";

  if (process.env.NODE_ENV === "DEVOLEPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errorMessage: err.message,
      stack: err.stack,
    });
  }
  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };

    error.message = err.message || "Internal Server Error";

    // wrong mongose Object Id
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }
    // handle mongoose ValidationError
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }
    // Handle the mongoose duplicate key error
    if (err.code === 1100) {
      const message = `Duplicate key ${Object.keys(err.keyValue)} entred`;
      error = new ErrorHandler(message, 400);
    }
    // handling wrong JWT error
    if (err.name === "JsonWebTokenError") {
      const message = " json web token is invalid";
      error = new ErrorHandler(message, 400);
    }
    // handling expired jwt error
    if (err.name === "TokenExpiredError") {
      const message = " json web token is Expired";
      error = new ErrorHandler(message, 400);
    }
  }
};
