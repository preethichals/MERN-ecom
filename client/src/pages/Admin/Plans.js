import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";

const Plans = () => {
  const [plan, setPlan] = useState([]);

  //getallplans
  const getAllPlans = async () => {
    try {
      const { data } = await axios.get("/api/v1/plan/get-plan");
      setPlan(data.plan);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllPlans();
  }, []);
  return (
    <Layout>
      <div className="row m-3">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All PRODUCT</h1>
          <div className="d-flex flex-wrap ">
            {plan?.map((p,index) => (
              <Link
                key={index}
                to={`/dashboard/admin/plan/${p.slug}`}
                className="col-sm-1 col-md-1 card m-1 p-1 rounded-2 text-center text-decoration-none"style={{ width: "15rem", height: "auto" }}
          
              >
                <div>
                <img
                        src={`/api/v1/plan/plan-sampleimage/${p._id}`}
                        alt={p.name}
                        className=" p-1 rounded-0 img-fluid"
                        style={{ width: "22rem", height: "17rem" }}
                      />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,34)}..</p>
                    
                  </div>

                  <button
                          className="detail btn my-2 mx-3 text-white"
                        
                          style={{
                            backgroundColor: "#373132",
                            letterSpacing: "0.1em",
                          }} 
                        >
                          More Options
                        </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </Layout>
  );
};
export default Plans;
