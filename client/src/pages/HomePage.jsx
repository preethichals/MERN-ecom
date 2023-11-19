import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

// import { useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";


function HomePage() {

  //Mens Product
  const mensProd = [{
    "id":"001",
    "image":"mens-sec.jpg",
    "title":"T-Shirt"
  },
  {
    "id":"002",
    "image":"watch.jpg",
    "title":"Watches"
  },
  {
    "id":"003",
    "image":"mens-shoe.jpg",
    "title":"Shoes"
  },
  {
    "id":"004",
    "image":"perfume.jpg",
    "title":"Perfume"
  }
]

//Womens Product

const womensProd = [{
  "id":"001",
  "image":"womens-handbag.jpg",
  "title":"Handbags"
},
{
  "id":"002",
  "image":"womendress.jpg",
  "title":"Western"
},
{
  "id":"003",
  "image":"women-Footwear.jpg",
  "title":"Heels"
},
{
  "id":"004",
  "image":"cosmetics.jpg",
  "title":"Makeup"
}
]

//kids product

const kidsProd = [{
  "id":"001",
  "image":"kids-boy.jpg",
  "title":"Boys"
},
{
  "id":"002",
  "image":"kids-girl.jpg",
  "title":"Girls"
},
{
  "id":"003",
  "image":"kids-shoe.jpg",
  "title":"Shoes"
},
{
  "id":"004",
  "image":"kids-tops.jpg",
  "title":"Tops"
}
]


  // const navigate = useNavigate();

  return (
    <Layout title={"Online Shopping"}>
      <div className="container-fluid"  style={{ backgroundColor: "#fff" }}>
       
   <ImageSlider/>

   <div className=" container-fluid" style={{ backgroundColor: "#fff" }}>
   <div>
   <h2 className=" text-capitalize align-middle text-center pt-2 pb-1 cursive-heading border-bottom" style={{ letterSpacing:"0.5rem" ,color:"#f9487b" }}>Duis aute irure</h2>
   <h6 className=" text-center text-wrap d-block pb-2 lh-base"style={{ letterSpacing:"0.2rem", color:"#5a5a5a"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim </h6>


   </div>
        {/* ForHIM Section */}
        <div className="row bg-mens-sec mt-2 d-flex flex-row border-bottom border-3 pb-4" style={{ backgroundColor: "#fff" }}>
        <div
            className="row mx-3 col-md-3 pt-4 rounded-3"
            style={{ backgroundColor: "transparent" }}
          >
            <img
              className="rounded img-responsive w-100 m-auto p-2 border"
              style={{
                maxWidth: "16rem",
                height: "auto",
                backgroundColor: "#fff",
              }}
              src={require("./../Images/mens-portrait.jpg")}
              alt=""
            />
          </div>
          <div
            className="col-md-8 text-center pt-2 my-3 shadow-lg border-3 border-bottom rounded-4"
            style={{ backgroundColor: "#e7f8f7" }}
          >
            <strong
              className="text-center text-decoration-underline text-uppercase p-2 sec-heading "
              style={{ letterSpacing: "0.2em", color: "#216374" }}
            >
              #For HIM
            </strong>
            <div className="container text-center mb-3 ">
              <div className="row row-cols-2 row-cols-lg-4 row-cols-md-2 g-2 ">

              {mensProd && mensProd.map ((m,index) => {
                return (
                  <div className="col " key={index}>
                    <div className="p-1">
                    <img
                      className="img-thumbnail w-100"
                      style={{ width: "12rem", height: "16em" }}
                      src={require(`./../Images/${m.image}`)}
                      alt=""
                    />
                    </div>
                    <h6 className="heading">{m.title}</h6>
                    
                  </div>
                )
                })}
             
              </div>
              <Link to="/plan" className="view">View More</Link>
            </div>
          </div>
        </div>
         {/* ForHER Section */}
         <div className="row bg-womens-sec  my-2 d-flex flex-row-reverse border-bottom border-3 pt-3 pb-4"  style={{ backgroundColor:"transparent" }}>
         
          <div
            className="col-md-8 text-center pt-2 my-2 shadow-lg border-3 border-bottom rounded-4"
            style={{ backgroundColor:"transparent" }}
          >
            <strong
              className="sec-heading text-center text-decoration-underline text-uppercase  p-2"
              style={{ letterSpacing: "0.2em", color: "#f55c83" }}
            >
              #For HER
            </strong>
            <div className="container text-center mb-3">
              <div className="row row-cols-2 row-cols-lg-4 row-cols-md-2 g-2 ">
              {womensProd && womensProd.map ((m,index) => {
                return (
                  <div className="col " key={index}>
                    <div className="p-1">
                    <img
                      className="img-thumbnail w-100"
                      style={{ width: "12rem", height: "16em" }}
                      src={require(`./../Images/${m.image}`)}
                      alt=""
                    />
                    </div>
                    <Link to="/plan"><h6 className="heading">{m.title}</h6></Link>
                  </div>
                )
                })}
            
              </div>
              <Link to="/plan" className="view">View More</Link>
            </div>
          </div>
          <div
            className="row mx-3 col-md-3 pt-4  rounded-3"
            style={{ backgroundColor: "transparent" }}
          >
            <img
              className="rounded img-responsive w-100 m-auto p-2 border"
              style={{
                maxWidth: "16rem",
                height: "auto",
                backgroundColor: "#fff",
              }}
              src={require("./../Images/women-section.jpg")}
              alt=""
            />
          </div>
        </div>
{/* For KIDS Section */}
<div className="row bg-mens-sec mt-2 d-flex flex-row border-bottom border-3 pb-4" style={{ backgroundColor: "#fff" }}>
        <div
            className="row mx-3 col-md-3 pt-4 rounded-3"
            style={{ backgroundColor: "transparent" }}
          >
            <img
              className="rounded img-responsive w-100 m-auto p-2 border"
              style={{
                maxWidth: "16rem",
                height: "auto",
                backgroundColor: "#fff",
              }}
              src={require("./../Images/kids.jpg")}
              alt=""
            />
          </div>
          <div
            className="col-md-8 text-center pt-2 my-3 shadow-lg border-3 border-bottom rounded-4"
            style={{ backgroundColor: "#e7f8f7" }}
          >
            <strong
              className="sec-heading text-center text-decoration-underline text-uppercase  p-2"
              style={{ letterSpacing: "0.2em", color: "#216374" }}
            >
              #For KIDS
            </strong>
            <div className="container text-center mb-3 ">
              <div className="row row-cols-2 row-cols-lg-4 row-cols-md-2 g-2 ">
              {kidsProd && kidsProd.map ((m,index) => {
                return (
                  <div className="col " key={index}>
                    <div className="p-1">
                    <img
                      className="img-thumbnail w-100"
                      style={{ width: "12rem", height: "16em" }}
                      src={require(`./../Images/${m.image}`)}
                      alt=""
                    />
                    </div>
                    <h6 className="heading">{m.title}</h6>
                  </div>
                )
                })}
                 
              </div>
              <Link to="/plan" className="view">View More</Link>
            </div>
          </div>
        </div>
   

       
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
