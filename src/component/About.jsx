import React from 'react'
import AboutPic from "../image/about.jpg"
import Shop from "../image/shop.png"
import Rental from "../image/rental.png"
import Car from "../image/car-about.png"
import Operator from "../image/operator.png"
import Select from "../image/select.png"
import Drive from "../image/drive.png"


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="w-11/12  mx-auto ">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10">

      <img src={ AboutPic } alt="" className="md:w-1/2" />
            <div className="flex flex-col items-start  md:w-1/2 gap-10">
            
            <div className="flex flex-col items-start gap-3">
            <h3 className="text-sm  tracking-wide font-pop  text-secondary-200 uppercase">About Our Company</h3>
            <h1 className="text-xl md:text-3xl  tracking-wide font-pop font-bold text-secondary-200 ">You start the engine and your adventure begins</h1>
            <p className="text-sm font-pop text-secondary-400 md:w-10/12 ">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            </div>
            <div className="flex gap-6 md:gap-12 items-end">
              <div className="flex flex-col gap-1 items-center ">
                <img src={ Car } alt="" className='w-1/2' />
                <div className="flex items-center gap-2">
                  <span className='font-semibold font-pop text-xl text-secondary-200'>20</span>
                  <span className='font-pop'>Car Types</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center ">
                <img src={ Rental } alt="" className='w-1/2' />
                <div className="flex items-center gap-2">
                  <span className='font-semibold font-pop text-xl text-secondary-200'>85</span>
                  <span className='font-pop'>Rental Outlets</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center ">
                <img src={ Shop } alt="" className='w-1/2' />
                <div className="flex items-center gap-2">
                  <span className='font-semibold font-pop text-xl text-secondary-200'>55</span>
                  <span className='font-pop'>Repair Shop</span>
                </div>
              </div>
              
            </div>

        

          </div>
           </div>
      <div className="mx-auto text-center pt-20 pb-10 flex flex-col gap-2">
                    <h3 className="text-sm tracking-wide font-pop  text-secondary-200 uppercase">Plan your trip now</h3>
            <h3 className="text-xl md:text-3xl racking-wide font-pop font-bold text-secondary-200 ">Quick & easy car rental</h3>

      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex items-center flex-col  text-center sm:w-1/3">
            <img src={ Select } alt="" />
            <div className="flex flex-col gap-1 items-center">
          <h4 className="text-lg md:text-xl tracking-wide font-pop font-bold text-secondary-200">Select a car</h4>
          <p className="text-sm font-pop text-secondary-400 w-7/12 sm:w-10/12">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
        </div>
        <div className="flex items-center flex-col  text-center sm:w-1/3">
            <img src={Operator} alt="" />
            <div className="flex flex-col gap-1 items-center">
          <h4 className="text-lg md:text-xl tracking-wide font-pop font-bold text-secondary-200">Contact Operator</h4>
          <p className="text-sm font-pop text-secondary-400 w-7/12 sm:w-10/12">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
            </div>
        </div>
        <div className="flex items-center flex-col  text-center sm:w-1/3">
            <img src={ Drive } alt="" />
            <div className="flex flex-col gap-1 items-center">
          <h4 className="text-lg md:text-xl tracking-wide font-pop font-bold text-secondary-200">Let's Drive</h4>
          <p className="text-sm font-pop text-secondary-400 w-7/12 sm:w-10/12">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
            </div>
        </div>
        </div>
      </div>
      <div className='bg-secondary-200 text-center px-2 my-20 py-12'>
        <div className="flex flex-col gap-1 md:gap-3 items-center">
          
                    <h1 className="text-xl md:text-2xl lg:text-5xl tracking-wide font-pop font-bold text-white ">Save big with our cheap car rental!</h1>
            <h1 className="text-sm md:text-xl tracking-wide font-pop text-white/90 text-center lg:text-left">Top Airports Local Suppliers <span className='text-primary-200'>24/7 </span>Support.</h1>
        </div>

      </div>

    </div>
  )
}

export default About
