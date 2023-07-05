import React, { useEffect, useState } from "react";
import { useCart } from "../context/cart";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  // eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientToken, setClientToken] = useState("");
  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => (total = total + item.price));
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "https://ecomm-d72q.onrender.com/api/v1/plan/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      // eslint-disable-next-line
      const { data } = await axios.post(
        "https://ecomm-d72q.onrender.com/api/v1/plan/braintree/payment",
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);

      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout title={"Your Cart"}>
      <div className="container ">
        <div className="row pt-3 ">
          <h1
            className="fs-4 text-uppercase m-2"
            style={{ letterSpacing: "0.2em", color: "#222222" }}
          >
            {!auth?.user
              ? "Hello Guest"
              : `Hello  ${auth?.token && auth?.user?.name}`}
            <p className="text-center">
              {cart?.length
                ? `You Have ${cart.length} Products in your List ${
                    auth?.token ? "" : "please login to checkout !"
                  }`
                : " Your Cart Is Empty"}
            </p>
          </h1>
          <div className="col-md-9 p-0 m-0">
            {cart?.map((p, index) => (
              <div className="row m-2" key={index}>
                <div className="row border border-secondary p-2">
                  <img
                    src={`https://ecomm-d72q.onrender.com/api/v1/plan/plan-sampleimage/${p._id}`}
                    alt={p.name}
                    className="rounded-2 p-2 img-fluid"
                    style={{ width: "auto", height: "20rem" }}
                  />
                  <div className="col text-center">
                    <p
                      className="fs-4 text-uppercase mt-3"
                      style={{ letterSpacing: "0.2em", color: "#216374" }}
                    >
                      Name :{" "}
                      <span
                        className="fs-4 text-uppercase fw-bold"
                        style={{ letterSpacing: "0.2em", color: "#47856c" }}
                      >
                        {p.name}
                      </span>
                    </p>
                    <p
                      className=" fs-5 lh-lg"
                      style={{ letterSpacing: "0.1em", color: "#5b5c56" }}
                    >
                      {" "}
                      <span
                        className="fs-4 text-uppercase"
                        style={{ letterSpacing: "0.2em", color: "#216374" }}
                      >
                        Description :{" "}
                      </span>
                      {p.description}
                    </p>
                    <button
                      className="btn btn-danger text-center m-auto"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-md-4 cart-remove-btn"></div>
              </div>
            ))}
          </div>
          <div className="col-md-3 text-center">
            <h4>Cart Summary</h4>
            <h5 className="p-2 bg-body-secondary fw-light">
              Total | Check-Out | Payment
            </h5>
            <p className=" m-auto fs-4 my-2" style={{ letterSpacing: "0.2em" }}>
              Total : {totalPrice()}
            </p>

            <div className="mb-3">
              {auth?.token ? (
                <button className="btn btn-primary btn-lg">
                  Proceed to Checkout
                </button>
              ) : (
                <button
                  className="btn btn-outline-warning"
                  onClick={() =>
                    navigate("/login", {
                      state: "/cart",
                    })
                  }
                >
                  Login to Check-Out
                </button>
              )}
            </div>
            <div className="mt-2">
              {!clientToken || !auth?.token || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />

                  <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing ...." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
