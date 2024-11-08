import jwt from "jsonwebtoken";

/*********************
 * VERIFY USER TOKEN *
 *********************/
export const verifyUserToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthenticated" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, message: "Token is invalid" });
      }

      req.decodedToken = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

/*************************
 * CHECK AUTHORIZED USER *
 *************************/
export const isAuthorizedUser = (req, res, next) => {
  try {
    const authenticatedUserToken = req.decodedToken;
    if (authenticatedUserToken) {
      if (authenticatedUserToken.role === "admin") {
        return next();
      } else {
        res.status(401).json({ message: "You are not authorized" });
      }
    } else {
      res.status(403).json({ message: "Your account is not authorized" });
    }
  } catch (error) {
    next(error);
  }
};
