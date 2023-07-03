import React from "react";

function SchemesPage() {
  return (
    <>
      <div className="container">
        <div
          className="row justify-content-center m-4"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div
            className=" bg-white rounded-1 m-1 col-2"
            style={{ minWidth: "10rem", minHeight: "8rem" }}
          >
            <img
              className=" img-fluid"
              src={require("./../Images/avocado.png")}
              alt="Keto"
              style={{ width: "10rem", height: "7rem" }}
            />
            <h4 className="text-center">Keto</h4>
          </div>
          <div
            className=" bg-white rounded-1 m-1 col-2"
            style={{ minWidth: "10rem", minHeight: "8rem" }}
          >
            <img
              className=" img-fluid"
              src={require("./../Images/meat.png")}
              alt="Keto"
              style={{ width: "10rem", height: "7rem" }}
            />
            <h4 className="text-center">Paleo</h4>
          </div>
          <div
            className=" bg-white rounded-1 m-1 col-2"
            style={{ minWidth: "10rem", minHeight: "8rem" }}
          >
            <img
              className=" img-fluid"
              src={require("./../Images/carrot.png")}
              alt="Keto"
              style={{ width: "8rem", height: "7rem" }}
            />
            <h4>Vegetarian</h4>
          </div>
          <div
            className=" bg-white rounded-1 m-1 col-2"
            style={{ minWidth: "10rem", minHeight: "8rem" }}
          >
            <img
              className=" img-fluid"
              src={require("./../Images/vegan.jpg")}
              alt="Keto"
              style={{ width: "8rem", height: "7rem" }}
            />
            <h4>Vegan</h4>
          </div>
          <div
            className=" bg-white rounded-1 m-1 col-2"
            style={{ minWidth: "10rem", minHeight: "8rem" }}
          >
            <img
              className=" img-fluid"
              src={require("./../Images/bread.jpg")}
              alt="Keto"
              style={{ width: "10rem", height: "7rem" }}
            />
            <h4>Gluten-Free</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchemesPage;
