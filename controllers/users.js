const knex = require("../Databases/db");
const bcrypt = require("bcrypt");

//get users
users = (req, res) => {
  knex
    .select("*")
    .from("Users")
    .then((data) => {
      console.log(data);
      res.json({ data: data });
    })
    .catch((er) => {
      console.log(er);
      res.json({ message: er });
    });
};

//insert data
createUsers = async (req, res) => {
  const userdata = {
    name: req.body.Name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  };
  knex("Users")
    .insert(userdata)
    .then((data) => {
      res.send({ success: `${userdata.email} registered successfully!` });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err });
    });
};

//update user
updateUser = (req, res) => {
  knex("Users")
    .where("id", "=", req.params.id)
    .update({
      id: req.body.id,
      Name: req.body.Name,
      email: req.body.email,
      password: req.body.password,
    })
    .then((data) => {
      res.send("updated successfully");
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

//delete user
deleteUser = (req, res) => {
  knex("Users")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      res.send("deleted successfully");
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

module.exports = { users, createUsers, updateUser, deleteUser };
