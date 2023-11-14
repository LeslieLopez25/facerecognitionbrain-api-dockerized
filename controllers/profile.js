const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        Promise.reject("Not found");
      }
    })
    .catch((err) => Promise.reject("error getting user"));
};

const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;
  db("users")
    .where({ id: id })
    .update({ name, age, pet })
    .then((resp) => {
      if (resp) {
        res.json("success");
      } else {
        Promise.reject("Unable to update");
      }
    })
    .catch((err) => Promise.reject("error updating user"));
};

module.exports = {
  handleProfileGet,
  handleProfileUpdate,
};
