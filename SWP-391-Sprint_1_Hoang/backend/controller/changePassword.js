const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function PasswordController(req, res) {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmPassword) {
      throw new Error("Please provide fill old password, new password and confirm password");
    }

    const userId = req.user?._id;

    if (!userId) {
      throw new Error("User ID is not provided");
    }

    const user = await userModel.findById(userId);

    const checkPassword = await bcrypt.compare(oldPassword, user.password);

    if (!checkPassword) {
        throw new Error("Old password is incorrect");
      }
  
      if (newPassword !== confirmPassword) {
        throw new Error("New password and confirm password do not match");
      }
  
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
  
      user.password = hashedNewPassword;
      const saveUser = await user.save();
  
      res.status(200).json({
        message: "Password changed successfully",
        data: saveUser,
        success: true,
        error: false
      });

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
}
module.exports = PasswordController;
