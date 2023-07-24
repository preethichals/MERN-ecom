import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/auth";
import Layout from "../../components/layout/Layout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // Form default function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://ecomm-d72q.onrender.com/api/v1/auth/login`, {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register Page"}>
      <div
        className="bg-login d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="bg-light rounded-3 px-4 pt-5">
          <h2
            className="fs-2 text-uppercase text-white bg-dark px-4 py-2 rounded-3 fw-lighter"
            style={{ letterSpacing: "0.2em" }}
          >
            Login Form
          </h2>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control bg-success-subtle"
                id="formEmail"
                placeholder="Enter Your Email-Id"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control bg-success-subtle"
                id="formPassword"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn px-3 py-2 mb-2 fw-bolder text-uppercase text-light"
              style={{ backgroundColor: "#b30000", letterSpacing: "0.2em" }}
            >
              Login
            </button>
          </form>
          <p style={{letterSpacing: "0.1em"}}> <span className="fw-bold">FOR TESTING</span> <br/>  'user@123' as email<br/>'user@123' as password</p>

        </div>
      </div>
    </Layout>
  );
}

export default Login;
