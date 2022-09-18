const User = require("../models/User");

exports.getUserService = async () => {
  const result = await User.find({}).sort({ _id: -1 });
  return result;
};
exports.createUserService = async (data) => {
  const newUser = new User(data);
  const result = await newUser.save();
  return result;
};
exports.getUserByIdService = async (id, body) => {
  const result = await User.findOne({ _id: id }, body);
  return result;
};
exports.putUserService = async (id, body) => {
  const result = await User.updateOne({ _id: id }, body);
  return result;
};
exports.deleteUserService = async (id) => {
  const result = await User.deleteOne({ _id: id });
  return result;
};
