import React from 'react'
import coupons from './../coupons.json'

function Coupon() {
  return (
    <>
    {coupons && coupons.map(coupon => {
        return(
            <div className="coupon" key={coupon.id}>
  <div className="coupon-container">
    <h3>{coupon.title}</h3>
  </div>
  <img src={require(`./../Images/${coupon.img}`)} alt="Avatar" style={{width: '100%'}} />
  <div className="coupon-container" style={{backgroundColor: 'white'}}>
    <h2><b>{coupon.coupon}</b></h2> 
    <p>{coupon.desc}</p>
  </div>
  <div className="coupon-container">
    <p>Use Promo Code: <span className="promo">{coupon.code}</span></p>
    <p className="expire">{coupon.expire}</p>
  </div>
</div>
        )
    })}

     
    </>
  )
}

export default Coupon