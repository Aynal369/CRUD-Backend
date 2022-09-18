const express = require("express");
const userController = require("../controllers/user.controllers");
const router = express.Router();

router.route("/").get(userController.getUser).post(userController.createUser);
router
  .route("/:id")
  .delete(userController.deleteUser)
  .get(userController.getUserById)
  .put(userController.putUser);

module.exports = router;
