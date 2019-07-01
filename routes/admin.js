const express = require("express");
const expressValidator = require("express-validator");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/add-product", isAuth, adminController.getAddProduct);
router.get("/products", isAuth, adminController.getProducts);
router.post(
  "/add-product",
  [
    expressValidator
      .body("title", "Please ensure the title contains more than 3 characters.")
      .isString()
      .isLength({ min: 3 })
      .trim(),
    expressValidator
      .body("imageUrl", "Please ensure you enter a valid image URL.")
      .isURL(),
    expressValidator
      .body("price", "Please ensure the price is a decimal.")
      .isFloat(),
    expressValidator
      .body(
        "description",
        "Please ensure the description is between 5 and 400 characters."
      )
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postAddProduct
);
router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);
router.post(
  "/edit-product",
  [
    expressValidator
      .body("title")
      .isAlphanumeric()
      .isLength({ min: 3 })
      .trim(),
    expressValidator.body("imageUrl").isURL(),
    expressValidator.body("price").isFloat(),
    expressValidator
      .body("description")
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);
router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;
