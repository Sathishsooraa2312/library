import React from "react";
import {useFormik} from "formik";
import * as yup from "yup"
// import { API } from './global.js'

const formValidationSchema = yup.object({
    email : yup.string().min(15),
        password :yup
        .string()
        .min(8,"need a password atleast 8")
        .max(12,"password is too long keep 12")
});
export function Signup(){
     const formik=useFormik({
        initialValues:{
        email :'ashok@gmail.com',
        password :''
        },
        validationSchema: formValidationSchema,
        onSubmit:(data)=>{
            console.log("onSubmit",data);
        },

     });

    return(<>
    <form onSubmit={formik.handleSubmit}>
        <input
        name="email"
         value={formik.values.email} 
         onChange={formik.handleChange}
         type="email" 
          placeholder="Enter Your e-mail"
          />
            {formik.errors.email}
        <input 
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
         type="password" 
         placeholder="Enter Your Password"
         />
         {formik.errors.password}
          <pre>{JSON.stringify(formik.values)}</pre>
          {/* <pre>{JSON.stringify(formik.errors)}</pre> */}
        <button type="submit">Submit</button>
    </form>

</>);
}