import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../Utilities/Utilities';
import { toast } from 'react-toastify';

export default function Register() {

  const notify = (msg,type) => {
    toast[type](msg);
  }
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const navigate=useNavigate()

let validate=Yup.object({
    name:Yup.string().required('name is required').min(5,'minimum characters is 5').max(15,'maximum number is 15'),
    email:Yup.string().required('email is required').email('email is invalid'),
    password:Yup.string().required('password is requird').matches(/^[A-Z][a-z0-9]{5,10}$/,'password must start with capital letter and at least 5 letters or numbers after it'),
    rePassword:Yup.string().required('repassword is required').oneOf([Yup.ref('password')],'not matching'),

})

let formik=useFormik({
    initialValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
    },
    validationSchema:validate,
    onSubmit:sendRegisterData,
})


async function sendRegisterData(values){
    setLoading(true)
    let {data}=await axios.post(`${baseUrl}/api/v1/auth/signup`,values).catch((err)=>{
      console.log(err)
     setError(err.response.data.message)
     setLoading(false)
     notify(err.response.data.message,'error')
    })
    if(data.message=='success'){
        navigate('/login')
        setLoading(false)
        notify('success','success')
       // console.log(data.message);
        //console.log(data)
    }
}

//console.log(formik)


  return <>
 
 <div className="container  w-75 mx-auto p-4">
 <h1 className='fw-bolder'>Register Now</h1>
  <form className='p-2'onSubmit={formik.handleSubmit}>
  <label htmlFor="name" className='my-2 fw-bolder'>Name :</label>
   <input type="text" name='name' id='name' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
   {formik.errors.name&&formik.touched.name?<div className='alert alert-danger'>{formik.errors.name}</div>:""}

   <label htmlFor="email" className='my-2 fw-bolder'>Email :</label>
   <input type="email" name='email' id='email' className='form-control'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
   {formik.errors.email&&formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:""}


   <label htmlFor="password" className='my-2 fw-bolder'>  Password :</label>
   <input type="password" name='password' id='password' className='form-control'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
   {formik.errors.password&&formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:""}


   <label htmlFor="rePassword" className='my-2 fw-bolder'>Repassword :</label>
   <input type="password" name='rePassword' id='rePassword' className='form-control'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} />
   {formik.errors.rePassword&&formik.touched.rePassword?<div className='alert alert-danger'>{formik.errors.rePassword}</div>:""}

   <button disabled={!(formik.isValid&&formik.dirty&&(!loading))} type='submit' className='btn bg-main text-white my-3 '>{loading?<i className='fas fa-spinner fa-spin'></i>:'Register'}</button>
  </form>
 </div>
  </>
}
