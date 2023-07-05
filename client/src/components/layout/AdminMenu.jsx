import React from "react";
import { NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <>
      <div className="text-center"></div>
      <div className="list-group">
        <h3 className="text-uppercase text-success">Admin Panel</h3>
        <NavLink
          to="/dashboard/admin/create-category"
          className=" fs-4 p-3 list-group-item list-group-item-action bg-info-subtle border-1 border-dark-subtle rounded m-1"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-plan"
          className="fs-4 p-3 list-group-item list-group-item-action bg-success-subtle border-1 border-dark-subtle rounded m-1"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/plan"
          className="fs-4 p-3 list-group-item list-group-item-action bg-secondary-subtle border-1 border-dark-subtle rounded m-1"
        >
          View all Products
        </NavLink>
      </div>
    </>
  );
}

export default AdminMenu;
