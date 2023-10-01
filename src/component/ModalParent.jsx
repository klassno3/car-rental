
import { useFormik } from "formik";
import Modal from './Modal'
import { AiOutlineClose } from "react-icons/ai"
import {FaLocationDot} from "react-icons/fa6"
import Input from './Input'
 
import Button from '../component/Button';
 import * as Yup from 'yup';
import CheckBox from "./CheckBox";
const ModalParent = ( {
  showModal,
  setShowModal,
  carType,
  pickupDate,
  pickupLocation,
  dropoffDate,
  dropoffLocation,
  
} ) => {
  



  const handleClose = () => {
    setShowModal(false)
  }
   const handleSubmit = (values) =>  {
     formik.setTouched ({
       firstName:true
 })
   if ( formik.isValid ) {
         console.log(values)
     
    } 
     }
  
  const Schema = Yup.object().shape( {
    firstName: Yup.string().required( "Enter a value for this field." ), 
    lastName: Yup.string().required( "Enter a value for this field." ), 
    phone: Yup.string().required( "Enter a value for this field." ), 
    age: Yup.number().required( "Enter a value for this field." ).min(18 ,"you have to be 18."), 
    email: Yup.string().email( "invalid email" ).required( "Enter a value for this field." ),
    address: Yup.string().required( "Enter a value for this field." ),
    city: Yup.string().required( "Enter a value for this field." ),
    zipCode: Yup.string().required( "Enter a value for this field." ),
    pickupTime: Yup.string().required( "Enter a value for this field." ),
    dropoffTime: Yup.string().required( "Enter a value for this field." ),
  
    
  })
    const formik = useFormik( {
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        city: "",
        zipCode: "",
        wantNews: false,
        dropoffTime: "",
        pickupTime: ""
   
    
      },
      
      validationSchema: Schema,
       onSubmit: handleSubmit
   
    
  } );
  const actionBar =
    <div>
    <button className="fixed top-8 right-8 text-xl" onClick={ handleClose }><AiOutlineClose /></button>
    </div>
  

  const modal = (
    <Modal onClose={ handleClose } actionBar={ actionBar }>

      <h1 className="text-xl md:text-3xl  tracking-wide font-pop font-bold text-primary-100 ">
        Complete Reservation
      </h1>
      <p className="text-sm text-secondary-400 italic my-3">
        Upon completing this reservation enquiry, you will receive:
        Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number
      </p>
      <form onSubmit={ formik.handleSubmit }>
        <div className="flex justify-between">

        
        <div className="">

      <span className=" font-semibold flex font-pop gap-1 items-center py-2 ">
        <FaLocationDot />
        <p>Pick up Date and Time</p>
        </span> 
        <div className="flex items-center gap-3">
          <p className="font-pop w-full text-secondary-300 text-small">{ pickupDate }/</p>
          <Input
            type="time"
            require={ true }
            name="pickupTime"
            value={ formik.values.pickupTime }
            error={ formik.touched.pickupTime && formik.errors.pickupTime }
            onBlur={ formik.handleBlur }
            onChange={formik.handleChange }
            />
        </div>
        
        <span className="font-semibold flex font-pop gap-1 items-center py-2">
          
          <FaLocationDot />
          
          <p>Drop off Date and Time</p>
          
        </span> 
        <div className="flex items-center gap-3">
          <p className="font-pop  w-full text-secondary-300">{ dropoffDate }/</p>
          <Input
            type="time"
            id="dropoffTime"
            require={ true }
            name="dropoffTime"
            value={formik.values.dropoffTime }
            error={ formik.touched.dropoffTime && formik.errors.dropoffTime }
            onBlur={ formik.handleBlur }
            onChange={(event) => {
              const { name, value } = event.target;
              formik.setFieldValue(name, value);
            }}
            />
        
          
        </div>
          </div>
          <div className="flex items-start font-semibold font-pop py-2 ">
          Car:{carType}
        </div>
        
              </div>
        <span className=" py-2 font-semibold  flex font-pop gap-1 items-center ">
          <FaLocationDot />
          <p>Pick up Location</p>
        </span> 
        <p className="font-pop text-secondary-300">{ pickupLocation }</p>
        
        <span className=" py-2  font-semibold flex font-pop gap-1 items-center ">
          <FaLocationDot />
          <p>Drop off Location</p>
        </span> 

        <p className="font-pop pb-4 text-secondary-300">{ dropoffLocation }</p>
        <p className="uppercase border-t-[1px]  text-primary-100 font-semibold font-pop py-4">Personal information</p>
        <div className="flex flex-col gap-5">
          
        <div className="flex gap-10">
          <Input
            type="text"
            label="First Name"
            placeHolder="First Name"
            require={ true }
            name="firstName"
            value={ formik.values.firstName }
            error={ formik.touched.firstName && formik.errors.firstName }
            onBlur={ formik.handleBlur }
              onChange={formik.handleChange }
          />
          
          <Input
            type="text"
            label="Last Name"
            placeHolder="Last Name"
            require={ true }
            name="lastName"
            value={ formik.values.lastName }
            error={ formik.touched.lastName && formik.errors.lastName }
            onBlur={ formik.handleBlur }
              onChange={formik.handleChange }
          />
          
        </div>
        
        <div className="flex gap-10">
          <Input
            
            type="tel"
            label="Phone Number"
            placeHolder="Phone Number"
            require={ true }
            name="phone"
            value={ formik.values.phone }
            error={ formik.touched.phone && formik.errors.phone }
            onBlur={ formik.handleBlur }
            onChange={formik.handleChange }
          />

          <Input
            type="number"
            label="Age"
            placeHolder="18"
            require={ true }
            name="age"
            value={ formik.values.age }
            error={ formik.touched.age && formik.errors.age }
            onBlur={ formik.handleBlur }
             onChange={formik.handleChange }
          />

        </div>
        
        <Input
          type="text"
          label="Email"
          placeHolder="example@gmail.com"
          require={ true }
          name="email"
          value={ formik.values.email }
          error={ formik.touched.email && formik.errors.email }
          onBlur={ formik.handleBlur }
            onChange={formik.handleChange }
        />
        

                  
        <Input
          type="text"
          label="Address"
          placeHolder="Address"
          require={ true }
          name="address"
          value={ formik.values.address }
          error={ formik.touched.address && formik.errors.address }
          onBlur={ formik.handleBlur }
            onChange={formik.handleChange }
            />

        <div className="flex gap-10">

          <Input
            type="text"
            label="City"
            placeHolder="City"
            require={ true }
            name="city"
            value={ formik.values.city }
            error={ formik.touched.city && formik.errors.city }
            onBlur={ formik.handleBlur }
            onChange={formik.handleChange }
          />
          
          <Input
            type="text"
            label="Zip Code"
            placeHolder="Zip Code"
            require={ true }
            name="zipCode"
            value={ formik.values.zipCode }
            error={ formik.touched.zipCode && formik.errors.zipCode }
            onBlur={ formik.handleBlur }
            onChange={formik.handleChange }
            />
        </div>
        <CheckBox
                  label="Please send me latest news and updates"
                  onChange={ formik.handleChange }
                  onBlur={ formik.handleBlur }
                  name="wantNews"
                  required={ false }
                  value={formik.values.wantNews}
                  />
                  
        <Button
          type="submit"
          handleClick={ formik.handleSubmit }
          small color='primary'>
          Reserve Now
        </Button>
            </div>
      </form>
    </Modal>

  )

  
  return (
    <div>
     
      { showModal && modal}
    </div>
  )
}

export default ModalParent
