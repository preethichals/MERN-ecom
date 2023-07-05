import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../components/layout/Layout'
import {useCart} from './../context/cart'
import { MdDescription } from "react-icons/md";
import { TbTruckDelivery} from "react-icons/tb";

import { GrCart } from "react-icons/gr";

function PlanDetail() {
   const similarProd = [{
    "name":" Beigh Top",
    "description":"Description about the product",
    "img":"bright-positive.jpg",
   },{
    "name":"Pink Top",
    "description":"Description about the product",
    "img":"kids.jpg",
   },
   {
    "img":"mens-tshirt-01.jpg"
   }
  ]
    const params = useParams()
    const navigate = useNavigate()
    const [cart,setCart] = useCart()
    const [plan,setPlan]  = useState({})
    const [isLoading,setLoading] = useState(false)

    const getPlanDetail = async() => {
        try {
          setLoading(true)
            const {data} = await axios.get(`https://ecomm-d72q.onrender.com/api/v1/plan/get-plan/${params.slug}`)
           
            setPlan(data?.plan)
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(() => {
      if(params?.slug)getPlanDetail()
      // eslint-disable-next-line
    },[params?.slug])
    
    
  return (<>
  <Layout title={'Plan-Details'}>
  
   
    {isLoading ? 'Loading...' :  
    <div className='container'  style={{ backgroundColor: "#ffffff" }}>
      <nav aria-label="breadcrumb" className='mt-4'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item text-decoration-none text-black">
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/plan">Products</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link to="/plan">{plan.name}</Link>
              </li>
            </ol>
          </nav>
    
    <div className='row container mt-1' style={{backgroundColor:"#f0dbda"}}>
        <div className='col-md-6 my-2'>
            <img className='img-thumbnail rounded-3 mx-auto mt-4 border border-1 bg-light p-2' src={`https://ecomm-d72q.onrender.com/api/v1/plan/plan-sampleimage/${plan._id}`} alt={plan.name}/>

        </div>
        <div className='col-md-6'>
        <div
              className="container mt-5 p-4 "
              style={{ backgroundColor:'#ffffff' }}
            >
             
              <p
                className="fs-1 font-weight-bolder border-bottom border-3 text-uppercase lh-base text-center"
                style={{ letterSpacing: "0.1em", color: "#47856c", backgroundColor:"#231122" }}
              >
                {plan.name}
            </p>
             
            <h6
                className="fs-5 lh-base"
                style={{ color: "#696969" }}
              >
               {plan.description}
              </h6>
             

              <h6
                className="fs-6 px-2 lh-base w-100 text-left fs-5" style={{ color: "#3e4444" }}
              >
              <span className='text-uppercase fs-4' style={{ letterSpacing: "0.2em", color: "#a0530a" }}>
              ₹ {plan.price}</span > 
              </h6>
              <h6 className='border-bottom pb-2'  style={{ letterSpacing: "0.1em", color: "#47856c" }}> Inclusive of all taxes</h6>
              
<h6
               
             className='lh-base w-100 text-left fs-5' style={{ letterSpacing: "0.2em", color: "#a0530a" }}>
              PRODUCT DETAILS <MdDescription/> : 
              </h6>
             
<p className='lh-base'>{plan.description}</p>

<p className=' fw-bold'>Size & Fit :<br/></p>
<p>The model (height 6') is wearing a size M</p>
<p className='fw-bold'>Material & Care</p>
<p>Material: 52% Cotton 48% Polyester
Machine Wash</p>
<div className='mb-2'>
<button
                className="btn btn-md text-white text-uppercase my-2 mx-2"
                style={{ backgroundColor: "#999999", letterSpacing: "0.2em" }}
                onClick={() => navigate('/plan') }
              >
                Back to Products
              </button>
              <button
                className="btn btn-md text-white text-uppercase my-2 mx-2"
                style={{ backgroundColor: "#999999", letterSpacing: "0.2em" }}
                onClick={() => {
                  setCart([...cart,plan])
                  toast.success('Product Added to Your Cart')
                }}
              >
                <GrCart /> Add to Cart
              </button>
</div>
              <h6
               className='lh-base w-100 text-left fs-5 border-top pt-2' style={{ letterSpacing: "0.2em", color: "#a0530a" }}>
              DELIVERY OPTIONS <TbTruckDelivery/> :
              </h6>
              <h6
                className=" lh-base w-100 text-left fs-5" style={{ color: "#3e4444" }}
              >
              <span className='fs-5' style={{ letterSpacing: "0.2em", color: "#a0530a" }}>
               </span>
              </h6>
              <li className='ps-3'>100% Original Products</li>
              <li className='ps-3'>Pay on delivery might be available</li>
              <li className='ps-3'>Easy 14 days returns and exchanges</li>
              <li className='ps-3'>Try & Buy might be available</li>
              
              <p className='m-3'>Product Code : {plan._id}</p>
            </div>

        </div>
        
        <div className='mb-3'> <h4 className='text-center mt-3'>--------- You May also like ---------</h4>
   <div>
                <div className="row justify-content-around align-content-center pe-auto ">
                
                  {similarProd?.map((p,index) => (
                    <div
                      key={index}
                      navigate={`/plan/${p.slug}`}
                      className="col-sm-1 col-md-1 card m-1 p-1 rounded-2 text-center "
                      style={{ width: "15rem", height: "auto" }}
                    >
                      
                      <img
                       src={require("./../Images/kids-boy.jpg")}
                        alt={p.name}
                        className=" p-1 rounded-0 img-fluid"
                        style={{ width: "15rem", height: "17rem" }}
                      />

                      <h6
                        className=" text-capitalize fw-semibold px-2 pt-2"
                        style={{ letterSpacing: "0.2em", color: "#47856c" }}
                      >
                        {p.name}
                      </h6>

                      <h6
                        className=" fs-6 text-capitalize fw-medium px-2 py-1border-bottom border-1"
                        style={{ letterSpacing: "0.2em", color: "#47856c" }}
                      >
                        {p.description}..
                      </h6>
                      
                      
                    </div>
                  ))}
                </div>
              </div>
   </div>
    </div>
   
    </div>

    }
   
   </Layout>
  </>
    
    
  )
}

export default PlanDetail