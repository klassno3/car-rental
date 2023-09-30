import React, { useState } from 'react'
import { useFormik } from "formik";
import { userSchema } from '../utils/userShema';
import Input from './Input';
import  Button  from './Button';
import TextArea from './TextArea';
const Contact = () => {
  const [firstName,setFirstName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
    const initialValues = {
    _id: new Date().getTime(),
    firstName: firstName,
    email: email,
    message: message,
   
   
    
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
     <div id='contact' className='py-16'>
      <h1 className="font-pop flex justify-center font-bold   text-3xl">Contact Us</h1>
      <div className="bg-white w-11/12 md:w-7/12 sm:3/4 mx-auto  px-12 py-8 rounded shadow-lg mt-8">
        <form onSubmit={formik.handleSubmit } action="">
          <div className="flex flex-col gap-10">
            <Input
              type="text"
              label="First Name"
              placeHolder="First Name"
              require={ true }
              name="firstName"
              value={ formik.values.firstName }
              error={ formik.touched.firstName && formik.errors.firstName }
              onBlur={ formik.handleBlur }
              onChange={ ( e ) => {
                formik.handleChange( e );
                setFirstName( e.target.value );
              } }
            />
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
            <TextArea
              type="textarea"
             
              placeHolder="Write a message"
              label="Tell us about it"
              require={ true }
              name="message"
              value={ formik.values.message }
              error={ formik.touched.message && formik.errors.message }
              onBlur={ formik.handleBlur }
              onChange={ ( e ) => {
                formik.handleChange( e );
                setMessage( e.target.value );
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
        </form>
      </div>
    </div>
  )
}

export default Contact
