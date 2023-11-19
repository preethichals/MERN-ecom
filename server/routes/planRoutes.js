import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createPlanController,
  deletePlanController,
  getPlanController,
  getSinglePlanController,
  planCategoryController,
  planCountController,
  planFilterController,
  planPageListController,
  planSampleImageController,
  productFiltersController,
  realtedProductController,
  updatePlanController,
} from "../controllers/planController.js";

const router = express.Router();

//routes
// create product
router.post(
  "/create-plan",
  requireSignIn,
  isAdmin,
  formidable(),
  createPlanController
);

//get all product
router.get("/get-plan", getPlanController);

//single product
router.get("/get-plan/:slug", getSinglePlanController);

//get sample image
router.get("/plan-sampleimage/:pid", planSampleImageController);

//delete product
router.delete(
  "/delete-plan/:pid",
  requireSignIn,
  isAdmin,
  deletePlanController
);

// Update product
router.put(
  "/update-plan/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updatePlanController
);

//Product filter
router.post("/plan-filter", planFilterController);

//Product count
router.get("/plan-count", planCountController);

//Product per page
router.get("/plan-list/:page", planPageListController);

//Category wise Product list
router.get("/plan-category/:slug", planCategoryController);

//Filter Products
router.get("/plan-filter", productFiltersController) 

//Search Products
router.get("/plan-search", productSearch)

//similar product
router.post("/related-product/:pid/:cid", realtedProductController);

//payment routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
