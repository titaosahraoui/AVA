const Order = require("../Models/order");
const Product = require("../Models/product");

const ErrorHandler = require("../utilities/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create a new Order   =====> /api/v1/order/new

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
  } = req.body;

  const order = new Order({
    orderItems,
    shippingInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    paidAt: Date.now(),
    user: req.user._id,
  });
  await order.save().then((createdOrder) => {
    res.status(200).json({
      success: true,
      createdOrder,
    });
  });
});

// Get single order by id =====> /api/v1/order/:id

exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("No order found with that id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// GEt logged order =====> /api/v1/orders/me

exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });
  if (!orders) {
    return next(new ErrorHandler("No order found", 404));
  }
  res.status(200).json({
    success: true,
    orders,
  });
});

// Get all orders ====> /api/v1/admin/orders

exports.allOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();
  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });
  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// Update / Proccess  orders admin =====> /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Order not found", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  for (const item of order.orderItems) {
    await updateStock(item.product, item.quantity);
  }

  order.orderStatus = req.body.status;
  order.deliveredAt = Date.now();

  await order.save();

  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stock -= quantity;
  await product.save({ validateBeforeSave: false });
}

// Delete order by id - Admin ====> /api/v1/admin/order/:id

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("No order found with that id", 404));
  }
  order.deleteOne();
  res.status(200).json({
    success: true,
  });
});
