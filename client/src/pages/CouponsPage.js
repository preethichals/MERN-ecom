import React from 'react'
import Coupon from '../components/Coupon'
import Layout from '../components/layout/Layout'

function CouponsPage() {
  return (
    <>
   <Layout title="Coupon Page">
    <div className='container'>
    <div className='row row-cols-md-2 row-cols-lg-5 gap-2 m-2'>
       
    <Coupon/>

   </div>
   </div>
 


   </Layout>
    </>
  )
}

export default CouponsPage