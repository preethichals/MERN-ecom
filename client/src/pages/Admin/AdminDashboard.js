import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import { useAuth } from "../../context/auth";
import Layout from "../../components/layout/Layout";

function AdminDashboard() {
  const [auth] = useAuth();
  return (
    <>
      <Layout>
        <div className=" container p-4 m-6">
          <div className="row">
            <div className="col-md-3 border-0">
              <h5>Admin Name: {auth?.user?.name}</h5>
              <h5>Admin Email: {auth?.user?.email}</h5>
              <h5>Admin Phone: {auth?.user?.phone}</h5>
            </div>
            <div className="col-md-9">
              {/* Menu */}
              <AdminMenu />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AdminDashboard;
