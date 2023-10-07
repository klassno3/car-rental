import React from 'react'
import Hero from '../image/hero.png'
import Button from '../component/Button'
import {Link } from 'react-scroll'
const Home = () => {
  return (
    <div className='home'>
      
      <div className="w-11/12  mx-auto mt-48 mb-28">
        <div className="flex flex-col items-center gap-12 lg:flex-row justify-between">
          <div className="flex flex-col items-center lg:items-start gap-10">
            
            <div className="flex flex-col items-center lg:items-start gap-3">
            <h3 className="text-sm md:text-base tracking-wide font-pop font-light text-secondary-500 uppercase">Plan your trip now</h3>
            <h1 className="text-5xl tracking-wide font-pop font-bold text-secondary-200 text-center lg:text-left">Save <span className='text-primary-200'>big</span> with our car rental</h1>
            <p className="text-base font-pop text-secondary-400 md:w-10/12 text-center lg:text-left">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center   gap-5 md:gap-10">
              <Link to='book' smooth={ true } offset={-150}>

              <Button color="primary" >
             Book Ride
              </Button>
              </Link>
                <Link to='about' smooth={ true } offset={-150}>
              <Button icon  color="secondary">
               Learn more
              </Button>
              </Link>
              
            </div>

          </div>
          

          <img src={ Hero } alt="" className= "w-full md:w-1/2" />
      
          
      </div>
      </div>
      
    </div>
  )
}

export default Home
