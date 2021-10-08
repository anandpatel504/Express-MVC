const express = require("express");
const router = express.Router();
const {
  users,
  createUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/users", users);
router.post("/createUser", createUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
