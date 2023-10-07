import React, { useState } from 'react'
import {Vehicles} from "../data"
import { Link } from 'react-scroll';

const Vehicle = () => {
  const intialTable = Vehicles[ "Audi A1 S- Line" ];
  
    const table = (<div className="flex flex-col justify-start md:items-end align-end ">
      <div className="flex flex-col">
        <div className="  text-lg font-pop bg-primary-100  text-white px-8 py-4 ">
          <span className="text-2xl">{intialTable.price} </span>
          <span className="">/ rent per day</span>
        </div>


        <div className="border-[2px] border-t-0  border-primary-100 ">
          <div className=" bg-gray-200/30 font-pop  border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            <p className="">Model </p>
            <p className="">|</p>
            <p className="">{ intialTable.model}</p>
          </div>
          
          <div className=" bg-gray-200/30 font-pop  border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            
            <p className="">Mark </p>
            <p className="">|</p>
            <p className="">{ intialTable.mark }</p>
          </div>
          
          <div className=" bg-gray-200/30 font-pop border-b-[1px] border-secondary-400/50  px-8 py-4 flex gap-4">
            <p className="">Year </p>
            <p className="">|</p>
            <p className="">{ intialTable.year}</p>
          </div>
          <div className=" bg-gray-200/30 font-pop  border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            <p className="">Doors </p>
            <p className="">|</p>
            <p className="">{ intialTable.doors }</p>
          </div>
          <div className=" bg-gray-200/30 font-pop border-b-[1px] border-secondary-400/50  px-8 py-4 flex gap-4">
            <p className="">AC</p>
            <p className="">|</p>
            <p className="">{ intialTable.ac}</p>
          </div>
          <div className=" bg-gray-200/30 font-pop border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            <p className="">Transmission </p>
            <p className="">|</p>
            <p className="">{ intialTable.trasmission }</p>
          </div>
          <div className=" bg-gray-200/30 font-pop  px-8 py-4 flex gap-4">
            <p className="">Fuel </p>
            <p className="">|</p>
            <p className="">{ intialTable.fuel }</p>
          </div>
        </div>
      </div>
         
      <Link offset={ -150 } to="book" activeClass="currently" smooth={ true } >
        <button
              type="submit"
              className='w-full mt-4 rounded cursor-pointer transition-all duration-1000 font-semibold  hover:shadow-lg hover:shadow-primary-100/70 flex gap-3 items-center justify-center group  text-white font-pop px-6 bg-primary-100 py-4 p'
              small
              color='primary'>
            Reserve Now
        </button>
        
      </Link>
    </div> )
    
  const image = ( <div className="md:mt-28">
  {intialTable.image}
</div>)
    
    const [ renderedTable, setRenderedTable ] = useState(table);
    const [ carImage, setCarImage ] = useState( image );

  const handleClick = ( carModel ) => {
    const details = Vehicles[carModel];
    const { ac, price, year, mark, model, doors, trasmission, image, fuel } = details;
    
    setRenderedTable( <div className="flex flex-col justify-start md:items-end align-end ">
      <div className="flex flex-col">
        <div className="  text-lg font-pop bg-primary-100  text-white px-8 py-4 ">
          <span className="text-2xl"> { price }</span>
          <span className="">/ rent per day</span>
        </div>


        <div className="border-[2px] border-t-0  border-primary-100 ">
          <div className=" bg-gray-200/30 font-pop  border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            <p className="">Model </p>
            <p className="">|</p>
            <p className="">{ model}</p>
          </div>
          
          <div className=" bg-gray-200/30 font-pop  border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            
            <p className="">Mark </p>
            <p className="">|</p>
            <p className="">{ mark}</p>
          </div>
          
          <div className=" bg-gray-200/30 font-pop border-b-[1px] border-secondary-400/50  px-8 py-4 flex gap-4">
            <p className="">Year </p>
            <p className="">|</p>
            <p className="">{ year}</p>
          </div>
          <div className=" bg-gray-200/30 font-pop  border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            <p className="">Doors </p>
            <p className="">|</p>
            <p className="">{ doors}</p>
          </div>
          <div className=" bg-gray-200/30 font-pop border-b-[1px] border-secondary-400/50  px-8 py-4 flex gap-4">
            <p className="">AC</p>
            <p className="">|</p>
            <p className="">{ ac}</p>
          </div>
          <div className=" bg-gray-200/30 font-pop border-b-[1px] border-secondary-400/50 px-8 py-4 flex gap-4">
            <p className="">Transmission </p>
            <p className="">|</p>
            <p className="">{trasmission}</p>
          </div>
          <div className=" bg-gray-200/30 font-pop  px-8 py-4 flex gap-4">
            <p className="">Fuel </p>
            <p className="">|</p>
            <p className="">{ fuel}</p>
          </div>
        </div>
      </div>
         
      <Link offset={ -150 } to="book" activeClass="currently" smooth={ true } >
        <button
              type="submit"
              className='w-full  mt-4 rounded cursor-pointer transition-all duration-1000 font-semibold  hover:shadow-lg hover:shadow-primary-100/70 flex gap-3 items-center justify-center group  text-white font-pop px-6 bg-primary-100 py-4 p'
              small
              color='primary'>
            Reserve Now
        </button>
        
      </Link>
    </div> )
    
    setCarImage( <div className="md:mt-28">
      { image }
    </div> )
  }
  return (
    <div className='vehicle w-11/12  mx-auto my-20'>

      <div className="mx-auto  items-center text-center  pb-10 flex flex-col gap-3">
        <h3 className="text-sm tracking-wide font-pop  text-secondary-200 uppercase">Vehicle Models</h3>
        <h3 className="text-xl md:text-3xl tracking-wide font-pop font-bold text-secondary-200 ">Our rental fleet</h3>
        <p className="text-sm font-pop text-secondary-400 md:w-1/2 ">
      Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
        </p>
      </div>
      <div className="grid  grid-cols-1 gap-10 md:grid-cols-3 ">

      <div className="flex flex-col gap-2 w-full lg:w-10/12">

      <div onClick={()=>handleClick("Audi A1 S- Line")} className="font-semibold text-lg font-pop bg-gray-200/30 text-secondary-200 px-8 py-4 hover:bg-primary-100 hover:text-white transition-all duration-300 cursor-pointer">
        <p>Audi A1 S-LIne</p>
      </div>
      <div onClick={()=>handleClick("VW Golf 6")} className="font-semibold text-lg font-pop bg-gray-200/30 text-secondary-200 px-8 py-4 hover:bg-primary-100 hover:text-white transition-all duration-300 cursor-pointer">
        <p>VW Golf 6</p>
      </div>
      <div onClick={()=>handleClick( "Toyata Camry" )} className="font-semibold text-lg font-pop bg-gray-200/30 text-secondary-200 px-8 py-4 hover:bg-primary-100 hover:text-white transition-all duration-300 cursor-pointer">
        <p>Toyota Camry</p>
      </div>
      <div onClick={()=>handleClick( "BMW 320 ModernLine" )} className="font-semibold text-lg font-pop bg-gray-200/30 text-secondary-200 px-8 py-4 hover:bg-primary-100 hover:text-white transition-all duration-300 cursor-pointer">
        <p>BMW 320 ModernLine</p>
      </div>
      <div onClick={()=>handleClick( "Mercedes-Benz GLK")} className="font-semibold text-lg font-pop bg-gray-200/30 text-secondary-200 px-8 py-4 hover:bg-primary-100 hover:text-white transition-all duration-300 cursor-pointer">
        <p>Mercedes-Benz GLK</p>
      </div>
      <div onClick={()=>handleClick("VW Passat CC")} className="font-semibold text-lg font-pop bg-gray-200/30 text-secondary-200 px-8 py-4 hover:bg-primary-100 hover:text-white transition-all duration-300 cursor-pointer">
        <p>VW Passat CC</p>
      </div>
        </div>
        {carImage}
        { renderedTable }
        
     
    </div>
                </div>

  )
}

export default Vehicle
