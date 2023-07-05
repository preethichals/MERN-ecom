import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";
import { GrCart } from "react-icons/gr";
import {Prices} from "../components/Prices"

function Mplan() {

  const navigate = useNavigate();
  const [plan, setPlan] = useState([]);
  const [checked, setChecked] = useState([]);
    // eslint-disable-next-line
  const [radio, setRadio] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useCart();
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  //Get all plans
  const getAllPlans = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://ecomm-d72q.onrender.com/api/v1/plan/plan-list/${page}`);
      setPlan(data.plan);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("https://ecomm-d72q.onrender.com/api/v1/plan/plan-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  //Lifecycle method
  useEffect(() => {
    if (page === 1) return;
    loadmore();
    // eslint-disable-next-line
  }, [page]);

  //Loadmore
  const loadmore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://ecomm-d72q.onrender.com/api/v1/plan/plan-list/${page}`);
      setLoading(false);
      setPlan([...plan, ...data?.plan]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Lifecycle methods
  useEffect(() => {
    if (!checked.length) getAllPlans();
    // eslint-disable-next-line
  }, [checked.length]);

  useEffect(() => {
    if (checked.length) filterPlan();
    // eslint-disable-next-line
  }, [checked]);

  //Get Filter meal plans
  const filterPlan = async () => {
    try {
      const { data } = await axios.post("https://ecomm-d72q.onrender.com/api/v1/plan/plan-filter", {
        checked,
      });
      setPlan(data?.plan);
    } catch (error) {
      console.log(error);
    }
  };

  //Lifecycle method
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //Get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://ecomm-d72q.onrender.com/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Filter by Category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  return (
    <Layout title={"Product"}>
      <main className=" container-fluid">
      
        {/* Banner */}
        <div className="row">
          <div className=" container-fluid ">
            <div className="bg-sale row">
             

            </div>
              {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="m-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-decoration-none text-black">
              
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              <Link to="/home-category">Category</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/plan">Products</Link>
            </li>
          </ol>
        </nav>
          </div>
        </div>
        {/* Filter by category */}
        <div className=" container-fluid row" style={{backgroundColor:"#f0dbda"}}>
        <div className="col-md-3 border border-2 " style={{backgroundColor:"#f6f8f5"}}>
        <h5 className="mx-4 mt-4 mb-2 text-uppercase fw-semibold" style={{color:"#f9487b"}}>Filter by Category</h5>
            <div className="d-flex flex-column ">
              {categories?.map((c,index) => (
                <Checkbox
                  className="text-capitalize mx-4 my-2"
                  key={index}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            {/* Filter By Price */}
            <h5 className="mx-4 mt-3 mb-3 text-uppercase border-top border-4 pt-4 ">Filter by Price</h5>
            <div className="d-flex flex-column ">
             <Radio.Group onChange={e => setRadio(e.target.value)}>
              {Prices?.map((p,index) => (
                <div key={index}>
                <Radio  className=" mx-4 my-2" value={p.array}>{p.name}</Radio>
                </div>
              ))}
             </Radio.Group>
            </div>
            <button
              className="btn btn-danger mt-3 mx-3 mb-3"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
          {/* All meal Plan list */}
          <div className="col-md-9 my-5" id="plan" style={{backgroundColor:"#f0dbda"}}>
            {isLoading ? (
              <span className="fs-5">Loading...</span>
            ) : (
              <div>
                <div className="row justify-content-around align-content-center pe-auto ">
                
                  {plan?.map((p,index) => (
                    <div
                      key={index}
                      navigate={`/plan/${p.slug}`}
                      className="col-sm-1 col-md-1 card m-1 p-1 rounded-2 text-center "
                      style={{ width: "15rem", height: "auto" }}
                    >
                      
                      <img
                        src={`https://ecomm-d72q.onrender.com/api/v1/plan/plan-sampleimage/${p._id}`}
                        alt={p.name}
                        className=" p-1 rounded-0 img-fluid"
                        style={{ width: "15rem", height: "17rem" }}
                      />

                      <h6
                        className="text-uppercase fw-semibold px-2 pt-2"
                        style={{ letterSpacing: "0.2em", color: "#232121" }}
                      >
                        {p.name.substring(0,14)}
                      </h6>

                      <h6
                        className=" fs-6 text-capitalize fw-light px-2 py-1border-bottom border-1"
                        style={{ letterSpacing: "0.2em", color: "#47856c" }}
                      >
                        {p.description.substring(0,34)}..
                      </h6>
                      
                      <h5
                        className="fs-5 text-center"
                        style={{ letterSpacing: "0.2em", color: "#000" }}
                      >
                        Rs. {p.price}
                      </h5>

                      <div>
                        
                        
                        <button
                          className=" btn btn-sm text-white my-2 mx-1 text-center"
                          style={{
                            backgroundColor: "#f9487b",
                            letterSpacing: "0.2em",
                          }}
                          onClick={() => {
                            setCart([...cart, plan]);
                            toast.success("Item Added to Cart");
                          }}
                        >
                         <GrCart />
                        </button>
                        <button
                          className="detail btn my-2 mx-3 text-white fw-lighter"
                          onClick={() => navigate(`/plan/${p.slug}`)}
                          style={{
                            backgroundColor: "#373132",
                            letterSpacing: "0.1em",
                          }} 
                        >
                          More Details
                        </button>
                        <div>{p.quantity === 0 ? <p>Sold Out</p> : <p> </p>}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Load More */}
            <div className="m-2 p-3">
              {plan && plan.length < total && (
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {isLoading ? "Loading..." : "Load More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Mplan;
