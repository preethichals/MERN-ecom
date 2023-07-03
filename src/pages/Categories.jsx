import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/layout/Layout";

function Categories() {
  const categories = useCategory();
  return (
    <Layout title={"Category"}>
      <div className="container my-4 ">
        <div>
          <h2>Categories List</h2>
          {categories && categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3">
              <Link
                key={c._id}
                to={`/category/${c.slug}`}
                className="d-block text-decoration-none text-dark"
              >
                <h3>{c.name}</h3>
                <h6>Hello</h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Categories;
