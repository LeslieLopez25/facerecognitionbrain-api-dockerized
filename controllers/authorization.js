const redisClient = require("./signin").redisClient;

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return Promise.reject("Unauthorized");
  }
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return Promise.reject("Unauthorized");
    }
    return next();
  });
};

module.exports = {
  requireAuth: requireAuth,
};
