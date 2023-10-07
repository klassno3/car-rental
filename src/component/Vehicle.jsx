import React, { useState } from 'react'
import {Vehicles} from "../data"

import VehicleTable from './VehicleTable';

const Vehicle = () => {
  const intialTable = Vehicles[ "Audi A1 S- Line" ];
  
    const table = (<VehicleTable details={intialTable}/> )
    
  const image = ( <div className="md:mt-28">
  {intialTable.image}
</div>)
    
    const [ renderedTable, setRenderedTable ] = useState(table);
    const [ carImage, setCarImage ] = useState( image );

  const handleClick = ( carModel ) => {
    const details = Vehicles[carModel];
   
    
    setRenderedTable( <VehicleTable details={details}/>)
    
    setCarImage( <div className="md:mt-28">
      { details.image }
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
  {Object.keys(Vehicles).map((carModel) => (
    <div
      key={carModel}
      onClick={() => handleClick(carModel)}
      className="font-semibold text-lg font-pop bg-gray-200/30 text-secondary-200 px-8 py-4 hover:bg-primary-100 hover:text-white transition-all duration-300 cursor-pointer"
    >
      <p>{carModel}</p>
    </div>
  ))}
</div>
        {carImage}
        { renderedTable }
        
     
      </div>
     
                </div>

  )
}

export default Vehicle
