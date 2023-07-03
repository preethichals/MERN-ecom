import fs from "fs";
import slugify from "slugify";
import planModel from "../models/planModel.js";
import categoryModel from "../models/categoryModel.js";

// Create Controller
export const createPlanController = async (req, res) => {
  try {
    const { name, category, description,price, quantity } = req.fields;
    const { sampleimage } = req.files;
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
          case !price:
            return res.status(500).send({ error: "Product Price" });
            case !quantity:
              return res.status(500).send({ error: "Number of quantity" });
                  case sampleimage && sampleimage.size > 1000000:
        return res.status(500).send({
          error: "Sample Image is Required and size should be less than 1mb",
        });
    }
    const plan = new planModel({
      ...req.fields,
      slug: slugify(name),
    });
    if (sampleimage) {
      plan.sampleimage.data = fs.readFileSync(sampleimage.path);
      plan.sampleimage.contentType = sampleimage.type;
    }

    await plan.save();
    res.status(200).send({
      success: true,
      message: "New Plan created!",
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating Plan",
    });
  }
};

//Get all Plans
export const getPlanController = async (req, res) => {
  try {
    const plan = await planModel
      .find({})
      .populate("category")
      .select("-sampleimage")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      countTotal: plan.length,
      message: "All Plans",
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting plans",
    });
  }
};

//Get Single plan

export const getSinglePlanController = async (req, res) => {
  try {
    const plan = await planModel
      .findOne({ slug: req.params.slug })
      .select("-sampleimage")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single plan fetched",
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single plan",
    });
  }
};

//Get Sample-image

export const planSampleImageController = async (req, res) => {
  try {
    const plan = await planModel.findById(req.params.pid).select("sampleimage");
    if (plan.sampleimage.data) {
      res.set("Content-type", plan.sampleimage.contentType);
      return res.status(200).send(plan.sampleimage.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: " Error whitle getting image",
      error,
    });
  }
};

//Delete controller
export const deletePlanController = async (req, res) => {
  try {
    await planModel.findByIdAndDelete(req.params.pid).select("-sampleimage");
    res.status(200).send({
      success: true,
      message: "Plan deleted succfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting plan",
      error,
    });
  }
};

//Update Controller

export const updatePlanController = async (req, res) => {
  try {
    const { name, category, description,price,quantity } = req.fields;
    const { sampleimage } = req.files;
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Product Price" });
          case !quantity:
            return res.status(500).send({ error: "Number of quantity" });
      case sampleimage && sampleimage.size > 1000000:
        return res.status(500).send({
          error: "Sample Image is Required and size should be less than 1mb",
        });
    }
    const plan = await planModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (sampleimage) {
      plan.sampleimage.data = fs.readFileSync(sampleimage.path);
      plan.sampleimage.contentType = sampleimage.type;
    }

    await plan.save();
    res.status(200).send({
      success: true,
      message: "Plan updated successfully",
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating Plan",
    });
  }
};

//Plan-Filter Controller

export const planFilterController = async (req, res) => {
  try {
    const { checked } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    const plan = await planModel.find(args);
    res.status(200).send({
      success: true,
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error While filtering meal plans",
      error,
    });
  }
};

//Plan count Controller

export const planCountController = async (req, res) => {
  try {
    const total = await planModel.find({}).estimatedDocumentCount();
    res.status(200).send({
      success: true,
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in getting count",
      error,
    });
  }
};

// Plan list per Page COntroller

export const planPageListController = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const plan = await planModel
      .find({})
      .select("-sampleimage")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in getting page",
      error,
    });
  }
};

//category wise plan
export const planCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    const plan = await planModel.find({ category }).populate("category");
    res.status(200).send({
      success: true,
      category,
      plan,
    });
  } catch (error) {
    console.log(error);
    res.success(400).send({
      success: false,
      error,
      message: "Error While getting products",
    });
  }
};

// filters
export const productFiltersController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const plan = await planModel.find(args);
    res.status(200).send({
      success: true,
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Filtering Products",
      error,
    });
  }
};

// similar products
export const realtedProductController = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const plan = await planModel
      .find({
        category: cid,
        _id: { $ne: pid },
      })
      .select("-sampleimage")
      .limit(3)
      .populate("category");
    res.status(200).send({
      success: true,
      plan,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error while geting related product",
      error,
    });
  }
};
