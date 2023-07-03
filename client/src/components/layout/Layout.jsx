import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Layout({ children, title, description, keywords }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{minHeight:"80vh"}}>
        <ToastContainer/>
        {children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Online Shopping",
  description: "Online Shopping",
  keywords: "clothes,handbag,tshirt,tops,accessories,makeup,watch,sunglass",
};

export default Layout;
