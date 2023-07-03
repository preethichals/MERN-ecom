import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";

function AdminUsers() {
  return (
    <Layout title={"all users"}>
      <div className=" container-fluid m-6 p-4">
        <div className=" row">
          <div className=" col-md-3">
            <AdminMenu />
          </div>
          <div className=" col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminUsers;
