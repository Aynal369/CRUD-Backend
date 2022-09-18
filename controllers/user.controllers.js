const {
  getUserService,
  createUserService,
  deleteUserService,
  getUserByIdService,
  putUserService,
} = require("../services/user.services");

exports.getUser = async (req, res, next) => {
  try {
    const users = await getUserService();
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const result = await createUserService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getUserByIdService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully updated user",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update user",
      error: error.message,
    });
  }
};
exports.putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await putUserService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully updated user",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update user",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteUserService(id);
    res.status(200).json({
      status: "success",
      message: "Successfully deleted one user",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't delete user",
      error: error.message,
    });
  }
};
