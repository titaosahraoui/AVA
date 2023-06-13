const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  allUsers,
  getUserDetails,
  updateUser,
  deleteUser,
} = require("../Controllers/authController");

const { isAuthenficatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/profile").get(isAuthenficatedUser, getUserProfile);
router.route("/profile/update").put(isAuthenficatedUser, updateProfile);
router.route("/password/update").put(isAuthenficatedUser, updatePassword);
router.route("/logout").get(logout);
router
  .route("/admin/users")
  .get(isAuthenficatedUser, authorizeRoles("admin"), allUsers);

router
  .route("/admin/user/:_id")
  .get(isAuthenficatedUser, authorizeRoles("admin"), getUserDetails)
  .put(isAuthenficatedUser, authorizeRoles("admin"), updateUser)
  .delete(isAuthenficatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
