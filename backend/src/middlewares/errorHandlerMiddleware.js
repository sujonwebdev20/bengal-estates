const errorHandler = (err, _req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  // Handling mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((item) => item.message);
    error = new Error(message);
  }
  // Handling mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.values(err.keyValue)} entered`;
    error = new Error(message);
  }
  // Wrong mongoose ObjectId error
  if (err.code === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new Error(message);
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({ error: error.message });
};

export default errorHandler;
