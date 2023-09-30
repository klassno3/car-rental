import React from 'react'
import AvatarOne from "../image/avatar-1.jpg"
import AvatarTwo from "../image/avatar-2.jpg"
const Testimonial = () => {
  return (
    <div className='testimonials bg-gray-100 font-pop py-20'>
      <div className="w-11/12  mx-auto">

        <div className="mx-auto items-center text-center  pb-10 flex flex-col gap-3">
                    <h3 className="text-sm tracking-wide font-pop  text-secondary-200 uppercase">Reviewed by People</h3>
        <h3 className="text-xl md:text-3xl tracking-wide font-pop font-bold text-secondary-200 ">Client's Testimonials</h3>
                    <p className="text-sm font-pop text-secondary-400 md:w-1/2 ">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>


      </div>
      <div className=" w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row gap-8 mt-8">

      <div className="bg-white p-10 md:w-1/2 rounded-md shadow-md">
            <p className='md:text-xl'>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable."</p>
            <div className="flex gap-5 mt-8">
              <img src={ AvatarOne } alt="" className="rounded-full w-16 h-16" />
              <div className="flex text-sm md:text-base flex-col">
              <p className="font-semibold">Parry Hotter</p>
              <p className=""> Belgrade</p>
              </div>
            </div>
          </div>
          
      <div className="bg-white p-10 md:w-1/2 rounded-md shadow-md">
            <p className='md:text-xl '>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"</p>
                <div className="flex gap-5 mt-8">
              <img src={ AvatarTwo } alt="" className="rounded-full w-16 h-16" />
              <div className="flex text-sm md:text-base flex-col">
              <p className="font-semibold">Ron Rizzly</p>
              <p className=""> Novi Sad</p>
              </div>
            </div>
          </div>
          
      </div>
    </div>
      </div>
  )
}

export default Testimonial
