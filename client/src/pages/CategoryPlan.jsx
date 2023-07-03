import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

function CategoryPlan() {
  const params = useParams();
  const [plans, setPlan] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //getCategory
  const getPlanByCategory = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/plan/plan-category/${params.slug}`
      );
      setCategory(data?.category);
      setPlan(data?.plans);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params?.slug) getPlanByCategory();
    // eslint-disable-next-line
  }, [params?.slug]);

  return (
    <>
    <Layout title={"Categories List"}>
      <div className="container"></div>
      <h4>Category Plan Name</h4>
      <h5>Category - {category?.name}</h5>
      <h3>{plans.name}</h3>
      <h4>{plans?.length} results in this category</h4>
      <div className="col-md-9 ">
        <h1 className="text-center">Plans List</h1>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="d-flex flex-wrap">
            {plans?.map((p,index) => (
              <Link
                key={index}
                to={`/dashboard/admin/plan/${p.slug}`}
                className="text-decoration-none text-black"
              >
                <div
                  className="card m-2 rounded-2"
                  style={{ width: "14rem", height: "auto" }}
                >
                  <img
                    src={`https://ecommerce-rm2m.onrender.com/api/v1/plan/plan-sampleimage/${p._id}`}
                    alt={p.name}
                    className="border-1 p-2 rounded-0 img-fluid"
                    style={{ width: "14rem", height: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <h5 className="card-title">{p.price}</h5>
                    <h5 className="card-title">{p.quantity}</h5>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
    </>
  );
}

export default CategoryPlan;
