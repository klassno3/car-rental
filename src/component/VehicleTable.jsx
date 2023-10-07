import { Link } from "react-scroll";

const VehicleTable = ({ details }) => {
  const { ac, price, year, mark, model, doors, trasmission, fuel } = details;

  return (
    <div className="flex flex-col justify-start md:items-end align-end ">
      <div className="flex flex-col">
        <div className="text-lg font-pop bg-primary-100 text-white px-8 py-4">
          <span className="text-2xl">{price}</span>
          <span className="">/ rent per day</span>
        </div>

        <div className="border-[2px] border-t-0 border-primary-100">
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

      <Link offset={-150} to="book" activeClass="currently" smooth={true}>
        <button
          type="submit"
          className="w-full mt-4 rounded cursor-pointer transition-all duration-1000 font-semibold hover:shadow-lg hover:shadow-primary-100/70 flex gap-3 items-center justify-center group text-white font-pop px-6 bg-primary-100 py-4 p"
          small
          color="primary"
        >
          Reserve Now
        </button>
      </Link>
    </div>
  );
};
export default VehicleTable