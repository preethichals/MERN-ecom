import axios from "axios";
import { Select } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";

const { Option } = Select;

function CreatePlan() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [sampleimage, setSampleImage] = useState("");

  //Get all Category
  const getAllPlan = async () => {
    try {
      const { data } = await axios.get("https://ecomm-d72q.onrender.com/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };

  //Lifecycle method
  useEffect(() => {
    getAllPlan();
  }, []);

  //Create Plan
  const handleCreatePlan = async (e) => {
    e.preventDefault();
    try {
      const planData = new FormData();
      planData.append("name", name);
      planData.append("description", description);
      planData.append("price", price);
      planData.append("quantity", quantity);
      planData.append("sampleimage", sampleimage);
      planData.append("category", category);
      const { data } = axios.post("https://ecomm-d72q.onrender.com/api/v1/plan/create-plan", planData);
      if (data?.success) {
        toast.success("Plan Created successfully"); 
      } else {
        toast.error(data?.message);
        navigate("/dashboard/admin/plan");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"create product"}>
      <div className=" container-fluid m-6 p-4">
        <div className=" row">
          <div className=" col-md-3">
            <AdminMenu />
          </div>
          <div className=" col-md-9">
            <h1>Create Plan</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Click here and Select a Category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c,index) => (
                  <Option key={index} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-primary col-md-12">
                  {sampleimage ? sampleimage.name : "Upload Image"}
                  <input
                    type="file"
                    name="sampleimage"
                    accept="image/*"
                    onChange={(e) => setSampleImage(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-2">
                {sampleimage && (
                  <div className="">
                    <img
                      src={URL.createObjectURL(sampleimage)}
                      alt="plan-sampleimage"
                      height={"2rem"}
                      className="img img-fluid"
                    />
                  </div>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Name here"
                  className=" form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Description about plan"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  value={price}
                  placeholder="Enter Price"
                  className=" form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Enter Quantity"
                  className=" form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="btn btn-primary text-center"
                  onClick={handleCreatePlan}
                >
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreatePlan;
