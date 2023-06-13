const User = require("../Models/user");
const ErrorHandler = require("../utilities/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sendToken = require("../utilities/jwtToken");
const sendEmail = require("../utilities/sendEmail");

// Register a User => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
  await user.save().then((user) => {
    // const token = createdUser.getJwtToken();
    // res.status(201).json({
    //   success: true,
    //   message: "user created",
    //   token,
    // });
    sendToken(user, 200, res);
  });
});

/// Login a user /api/v1/Login

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // Chek if email and passwored is entred by user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }
  // Finding user in database
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  // Check if password is correct or not
  // i was just trying something with this shit fuck you //  const isPasswordMatched = await bcrypt.compare(password, user.password);
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("invalid password"), 401);
  }
  sendToken(user, 200, res);
});

// Forgot password => /api/v1/password/forgot
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("No user founf with this email"), 404);
  }
  // reset token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  // Create reset URL password
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;
  const message = `your password reset token is as follow:\n\n${resetUrl}\n\n`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Avalanche password recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to : ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message), 500);
  }
});

// reset  Password ==>  /api/v1/password/reset/:token

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // hash URl token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  console.log(resetPasswordToken);
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  console.log(req.params.token);

  if (!user) {
    return next(
      new ErrorHandler("Password reset Token is Invalid or has been Expired "),
      400
    );
  }
  if (req.body.password !== req.body.confiremPassword) {
    return next(new ErrorHandler("Password does not match"), 400);
  }
  // Setup new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  sendToken(user, 200, res);
});

// Get currently logged user details /api/v1/profile

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

//Update / change password ==>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  // Check previous password
  const isMatched = await user.comparePassword(req.body.oldPassword);
  if (!isMatched) {
    next(new ErrorHandler("oldPassword does not match"), 400);
  }
  user.password = req.body.password;
  await user.save();
  sendToken(user, 200, res);
});

// Update profile user  ===> /api/v1/profile/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  // update the avatar user profile coming soon

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
  });
});

// logout   => /api/v1/logout

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httponly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// Admin routes

// get all users => /api/v1/admin/users

exports.allUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

//  Get users fetails ==> /api/v1/admin/users/:id

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params._id);
  if (!user) {
    return next(
      new ErrorHandler(`User not found by this id: ${req.params._id}`)
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
});

// Update user profile   ===> /api/v1/admin/user/:id

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };
  const user = await User.findByIdAndUpdate(req.params._id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    user,
  });
});

// Delete user profile   ===> /api/v1/admin/user/:id

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params._id);
  console.log(user);
  if (!user) {
    return next(
      new ErrorHandler(`User not found by this id: ${req.params._id}`)
    );
  }
  await user.deleteOne();

  res.status(200).json({
    success: true,
  });
});
