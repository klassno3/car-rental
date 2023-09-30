import React from 'react'
import Cross from "../image/cross.png"
import Dollar from "../image/dollar.png"
import Hidden from "../image/hidden.png"
import  Button  from "./Button"
const WhyChooseUs = () => {
  return (
    <div className=''>
            <div className="flex flex-col gap-12 lg:flex-row w-11/12 mx-auto justify-between pb-5 md:py-12">

         <div className="lg:w-1/2 flex flex-col items-start gap-4">
            <h3 className="text-sm tracking-wide font-pop  text-secondary-200 uppercase">Why Choose Us</h3>
            <h1 className="text-xl md:text-3xl tracking-wide font-pop font-bold text-secondary-200 ">Best valued deals you will ever find</h1>
        <p className="text-sm font-pop text-secondary-400 md:w-10/12 ">
        Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
        </p>
            <Button icon color="primary" >
               Find details
              </Button>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-8">

             <div className="flex items-start justify-start gap-5 ">
            <img src={Cross} alt="" />
            <div className="flex flex-col gap-3 items-start">
          <h4 className="text-lg md:text-xl tracking-wide font-pop font-bold text-secondary-200">Cross Country Drive</h4>
          <p className="text-sm font-pop text-secondary-400  md:w-10/12 ">Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.

</p>
            </div>
        </div>
             <div className="flex items-start justify-start gap-5 ">
            <img src={Dollar} alt="" />
            <div className="flex flex-col gap-3 items-start">
          <h4 className="text-lg md:text-xl tracking-wide font-pop font-bold text-secondary-200">All Inclusive Pricing</h4>
          <p className="text-sm font-pop text-secondary-400  md:w-10/12 ">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.

              </p>
              
            </div>
        </div>
             <div className="flex items-start justify-start gap-5 ">
            <img src={Hidden} alt="" />
            <div className="flex flex-col gap-3 items-start">
          <h4 className="text-lg md:text-xl tracking-wide font-pop font-bold text-secondary-200">No Hidden Charges</h4>
          <p className="text-sm font-pop text-secondary-400  md:w-10/12 ">Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.

              </p>
              
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
