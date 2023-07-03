import React from "react";
import Layout from "../components/layout/Layout";

function PageNotFound() {
  return (
    <>
      <Layout title={"Go Back - Page Not Found"}>
        <div className="d-flex flex-column justify-content-center align-items-center m-auto text-center py-5 min-vh-100">
          <h4 className="fs-1 fw-bolder ">404</h4>
          <p className=" fs-4 fw-light">Oops! Page Not Found</p>
          <button className=" border-2 rounded-3 bg-info px-3 py-2 text-decoration-none">
            Go Back To Home
          </button>
        </div>
      </Layout>
    </>
  );
}

export default PageNotFound;
