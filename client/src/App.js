import { Route, Routes } from "react-router-dom";
//css
import "./App.css";
//pages
import Mplan from "./pages/Mplan";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import PlanDetail from "./pages/PlanDetail";
import CategoryPlan from "./pages/CategoryPlan";
import PageNotFound from "./pages/PageNotFound";
// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
// Admin
import Plans from "./pages/Admin/Plans";
import AdminUsers from "./pages/Admin/AdminUsers";
import CreatePlan from "./pages/Admin/CreatePlan";
import UpdatePlan from "./pages/Admin/UpdatePlan";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
// route
import PrivateRoute from "./components/layout/Routes/Private";
import AdminRoute from "./components/layout/Routes/AdminRoute";
import CouponsPage from "./pages/CouponsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<CartPage />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/plan" element={<Plans />} />
          <Route path="admin/users" element={<AdminUsers />} />
          <Route path="admin/create-plan" element={<CreatePlan />} />
          <Route path="admin/plan/:slug" element={<UpdatePlan />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryPlan />} />
        <Route path="/plan" element={<Mplan />} />
        <Route path="/coupon" element={<CouponsPage />} />
        <Route path="/plan/:slug" element={<PlanDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
