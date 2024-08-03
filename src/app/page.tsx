'use client'
import { useFormik } from "formik";
import Image from "next/image";
import { validations } from "./components/Validations";
import InputForm from "./components/InputForm";

export default function Home() {

  // const formikInfo={
  //   initialValues:{
  //     name:'',
  //     email:'',
  //     password:'',
  //     confirmPass:'',
  //     checked:false,
  //     selected:'',

  //   },
  //   validationSchema:'',
  //   onSubmit:(values:any,)=>{
  //      console.log(values)
  //   //   action.resetForm()
  //    }
  // }
  const handleit=()=>{
    console.log("first")
  }
    const formik=useFormik({
      initialValues:{
        name:'',
        email:'',
        password:'',
        confirmPass:'',
        checked:false,
        selected:'',
  
      },
        // validationSchema:validations,
      onSubmit:(values:any,action)=>{
        console.log("clicked")
            console.log(values)
           action.resetForm()
       }
    })
  return (
    <div className=" flex flex-col p-16 gap-6">
         <h1 className=" text-2xl font-medium ">Formik form</h1> 
         {/* <InputForm type="text" formik={formikForm} id='name' />
         <InputForm type="email" formik={formikForm} id='email' />
         <InputForm type="password" formik={formikForm} id='password' />
         <InputForm type="password" formik={formikForm} id='confirmPass' /> */}
         <form onSubmit={formik?.handleSubmit} className=" flex flex-col gap-4">
           <input
            id="name"
            type='text'
            value={formik?.values?.name}
            onChange={formik?.handleChange}
            className=" text-black"
            />
            <select name="slected" id="selected"
                value={formik?.values?.slected}
                onChange={(e)=>{formik?.setFieldValue('selected',e.target.value)}}
                className=" text-black"
            >
              <option>select</option>
              <option value='rrr'>rrr</option>
              <option value='ddd'>ddd</option>
            </select>
        <button  type="submit" className=" bg-red-600 rounded-md p-2 font-medium w-24">Submit</button>
         </form>

    </div>
  );
}
