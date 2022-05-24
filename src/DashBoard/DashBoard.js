import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-base-content font-bold font-serif">
            <li>
              <Link to="/dashBoard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashBoard/myOrder">My Order</Link>
            </li>
            <li>
              <Link to="/dashBoard/addReview">Add Review</Link>
            </li>

            <li>
              <Link to="/dashBoard/manageAllOrder">Manage All Order</Link>
            </li>
            <li>
              <Link to="/dashBoard/addProduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashBoard/makeUpdate">Make Update</Link>
            </li>
            <li>
              <Link to="/dashBoard/manageProduct">Manage Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
