const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
} = require("../Controllers/orderController");

const { isAuthenficatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenficatedUser, newOrder);
router.route("/order/:id").get(isAuthenficatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenficatedUser, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenficatedUser, authorizeRoles("admin"), allOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenficatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenficatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
