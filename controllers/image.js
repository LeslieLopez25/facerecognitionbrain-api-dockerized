const Clarifai = require("clarifai");

const app = new Clarifai.App({
  // Use your own Clarifai API key
  apiKey: process.env.API_CLARIFAI,
});

const handleApiCall = (req, res) => {
  app.models
    .predict("face-detection", req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => Promise.reject("unable to work with API"));
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      res.json(entries[0].entries);
    })
    .catch((err) => Promise.reject("unable to get entries"));
};

module.exports = {
  handleImage,
  handleApiCall,
};
