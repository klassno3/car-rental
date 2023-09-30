import * as Yup from "yup";

export const userSchema = Yup.object().shape( {
  
 
     firstName: Yup.string().required( "Enter a value for this field." ), 
     message: Yup.string().required( "Enter a value for this field." ), 
     carType: Yup.string().required( "Enter a value for this field." ), 
    pickupDate: Yup.string().required("Pick up date is required"),
    pickupLocation: Yup.string().required( "Enter a value for this field." ),
    dropoffDate: Yup.string().required("Drop off date is required"),
    dropoffLocation: Yup.string().required( "Enter a value for this field." ),
    email: Yup.string().email("invalid email").required( "Enter a value for this field." ),

});
