import{useState} from 'react'
import { useFormik } from "formik";
import { userSchema } from '../utils/userShema';
import Logo from '../image/images.svg'
import {FaPhone,FaMailBulk} from "react-icons/fa"
import  Button  from "./Button"
import Input from './Input';
const Footer = () => {
  const [email,setEmail]=useState("")
   const initialValues = {
    _id: new Date().getTime(),
    email: email,
    
   
   
    
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
    <div className='bg-gray-100  font-pop py-5'>
      <div className="w-11/12 mx-auto ">
        <img src={ Logo } alt="" className="w-20 h-20" />
        <div className="flex flex-col gap-12 md:flex-row justify-between">

        <div className="flex flex-col gap-2">
        <p className="text-sm text-secondary-400 md:w-1/2 ">
          We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
        </p>
        <div className="flex gap-1 items-center "><FaPhone />
        <span className="text-secondary-200">(123) -456-789</span></div>
        <div className="flex gap-1 items-center "><FaMailBulk />
        <span className="text-secondary-200">carrental@gmail.com</span></div>
          </div>
          
          <div className="flex flex-col gap-3 md:w-1/2 items-end ">
            <div className="flex flex-col items-start gap-4">
              

            <div className="flex flex-col  ">
              <h4 className="text-lg md:text-2xl tracking-wide font-pop font-bold text-secondary-200">Subscription</h4>
              <p className="text-sm font-pop text-secondary-400  ">
                Subscribe your Email address for latest news & updates.
              </p>
            
          
           
            </div>
            <div className="flex flex-col gap-4 w-9/12">
                <Input
                  
              type="text"
              label="Email"
              placeHolder="example@gmail.com"
              require={ true }
              name="email"
              value={ formik.values.email }
              error={ formik.touched.email && formik.errors.email }
              onBlur={ formik.handleBlur }
              onChange={ ( e ) => {
                formik.handleChange( e );
                setEmail( e.target.value );
              } }
                />
                <Button
                  type="submit"
                  handleClick={ handleSubmit }
                  small
                  color='primary'>
                  Submit
                </Button>
                
            </div>
          </div>
           </div>
     
            </div>
      </div>
    </div>
    
  )
}

export default Footer
