import {useState} from 'react'
import { useFormik } from "formik";
import Input from "../component/Input";
import Dropdown from "../component/Dropdown";
import { userSchema } from '../utils/userShema';
import  Button  from '../component/Button';
const Book = () => {
  const [pickupLocation,setPickupLocation] = useState("")
  const [pickupDate,setPickupDate] = useState("")
  const [dropoffLocation,setDropoffLocation] = useState("")
  const [dropoffDate,setDropoffDate] = useState("")
  const [carType,setCarType] = useState("")
  const initialValues = {
    _id: new Date().getTime(),
    carType: carType,
    pickupDate: pickupDate,
    pickupLocation: pickupLocation,
    dropoffDate: dropoffLocation,
    dropoffLocation: dropoffDate,
   
    
  }
  const handleSubmit = (values) => {
    console.log(values)
   
 }
    const formik = useFormik( {
    initialValues,
    validationSchema: userSchema,
    onSubmit: handleSubmit
    
  } );
  return (
    <div className="w-11/12  bg-book bg-cover bg-no-repeat mx-auto my-28">
      <div className="px-8 py-10 rounded shadow-lg">
        <h4 className="text-lg pb-5 md:text-2xl tracking-wide font-pop font-bold text-secondary-200">
          Book a car
        </h4>
        <form onSubmit={ formik.handleSubmit }>
          <div className="grid grid-cols-3 gap-10 items-center">
            <Dropdown
              header="Select car type"
              label="Select car type"
              value={ formik.values.carType }
              name="carType"
              required={ true }
              data={ [
                { value: "", name: "Select car type" },
                {  value: "Audi A1 S-Line",name: "Audi A1 S-Line" },
                { value: "VW Golf 6",name: "VW Golf 6" },
                { value: "Toyata Camry", name: "Toyata Camry" },
                { value: "VW Passat CC",name: "VW Passat CC" },
                { value: "Mercedes-Benz GLK",name: "Mercedes-Benz GLK" },
                { value: " BMW 320 ModernLine" ,name: " BMW 320 ModernLine" },
              ] }
              onBlur={ formik.handleBlur }
              error={ formik.touched.carType && formik.errors.carType }
              onChange={ ( e ) => {
                formik.handleChange( e );
                setCarType( e.target.value );
              } }
            />
            
            <Dropdown
              header="Select pick up location"
              required={ true }
              label="Select pick up location"
              value={ formik.values.pickupLocation }
              name="pickupLocation"
              data={ [
                { value: "", name: "Select pick up location" },
                { value: "Belgrade", name: "Belgrade" },
                { value: "Novi Sad", name: "Novi Sad" },
                { value: "Nis", name: "Nis" },
                { value: "Kragujevac", name: "Kragujevac" },
                { value: "Subotic", name: "SuboticaK" },
                ] }
                onBlur={ formik.handleBlur }
                error={ formik.touched.pickupLocation && formik.errors.pickupLocation }
                onChange={ ( e ) => {
                  formik.handleChange( e );
                  setPickupLocation( e.target.value );
                } }
            />
            
            <Dropdown
              header="Select drop off up location"
              label="Select drop off up location"
              value={formik.values.dropoffLocation}
              required={ true }
              name="dropoffLocation"
              data={ [
                { value: "", name: "Select drop off location" },
                { value : "Belgrade",name: "Belgrade" },
                { value : "Novi Sad" ,name: "Novi Sad" },
                { value : "Nis" ,name: "Nis" },
                { value : "Kragujevac",name: "Kragujevac" },
                { value : "Subotic", name: "SuboticaK" },
              ] }
              onBlur={ formik.handleBlur }
              error={ formik.touched.dropoffLocation && formik.errors.dropoffLocation }
              onChange={(e) => {
                  formik.handleChange(e);
                  setDropoffLocation(e.target.value);
                }}
            />
            
            <Input
              type="date"
              label="Pick Up Date"
              require={ true }
              name="pickupDate"
              value={ formik.values.pickupDate }
              error={ formik.touched.pickupDate && formik.errors.pickupDate }
              onBlur={ formik.handleBlur }
              onChange={ ( e ) => {
                formik.handleChange( e );
                setPickupDate( e.target.value );
              } }
            />
            
            <Input
              type="date"
              label="Drop off Date"
              require={ true }
              name="dropoffDate"
              value={ formik.values.dropoffDate }
              error={ formik.touched.dropoffDate && formik.errors.dropoffDate }
              onBlur={ formik.handleBlur }
              onChange={(e) => {
              formik.handleChange(e);
              setDropoffDate(e.target.value);
              } }
            />
                
            <Button
              type="submit"
              handleClick={ handleSubmit }
            small color='primary'>Search</Button>
                </div>
           </form>
      </div>
    </div>
    
  )
}

export default Book
