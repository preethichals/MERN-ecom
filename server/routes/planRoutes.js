import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
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
// create plan
router.post(
  "/create-plan",
  requireSignIn,
  isAdmin,
  formidable(),
  createPlanController
);

//get all plan
router.get("/get-plan", getPlanController);

//single plan
router.get("/get-plan/:slug", getSinglePlanController);

//get sample image
router.get("/plan-sampleimage/:pid", planSampleImageController);

//delete plan
router.delete(
  "/delete-plan/:pid",
  requireSignIn,
  isAdmin,
  deletePlanController
);

// Update plan
router.put(
  "/update-plan/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updatePlanController
);

//Plan filter
router.post("/plan-filter", planFilterController);

//Plan count
router.get("/plan-count", planCountController);

//Plan per page
router.get("/plan-list/:page", planPageListController);

//Category wise Product list
router.get("/plan-category/:slug", planCategoryController);

//Filter Products
router.get("/plan-filter", productFiltersController) 

//similar product
router.post("/related-product/:pid/:cid", realtedProductController);

export default router;
