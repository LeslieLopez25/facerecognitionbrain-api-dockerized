const jwt = require("jsonwebtoken");
const redis = require("redis");

//SET UP REDIS
const redisClient = redis.createClient(process.env.REDIS_URI);

const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers;
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json("Unauthorized");
    }
    removeToken(authorization, reply);
    return res.json({ id: reply });
  });
};

const removeToken = (key, value) => {
  return Promise.resolve(redisClient.del(key, value));
};

const handleSignout = (req, res, db) => {
  const { authorization } = req.headers;
  return authorization && getAuthTokenId(req, res);
};

module.exports = {
  handleSignout,
};
