import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function AddUser(props) {
    const [address, setaddress] = useState("")
    const [addresserr, setaddresserr] = useState("this is required")
    const initialvalues = {
        name: props.obj.name ? props.obj.name : "",
        email: props.obj.email ? props.obj.email : "",
        age: props.obj.age ? props.obj.age : "",
        password: props.obj.password ? props.obj.password : "",
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(10).max(20).required("required"),
        email: Yup.string().min(10).max(20).email().required("required"),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,'Need one special character'),
            age:Yup.number().required()
    })

    const add = (values) => {
        alert(add);
        console.log(values)
    }
    
    const edit = (values) => {
        alert("edit");
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initialvalues,
        validationSchema: validationSchema,
        onSubmit: props.obj.id?(values)=>edit(values):(values)=>add(values)
    })

    // const handleAddress = (event)=>{
    //     if(event.target.value.length<20){
    //         setaddresserr("atleast 20 characters")
    //     }else{
    //         setaddresserr("");
    //     }
    // }
    return (
        <div className="App">
            <div className="container">
                <div className="col-md-12 text-center">
                    <h1>formik implementation</h1>
                    <input type="text" placeholder="enter your name" className="form-control m-3" name="name" onChange={formik.handleChange} defaultValue={formik.values.name} />
                    <small className='text-danger'>{formik.errors.name}</small>
                    <input type="text" placeholder="enter your email" className="form-control m-3" name="email" onChange={formik.handleChange} defaultValue={formik.values.email} />
                    <small className='text-danger'>{formik.errors.email}</small>
                    <input type="text" placeholder="enter your password" className="form-control m-3" name="password" onChange={formik.handleChange} defaultValue={formik.values.password} />
                    <small className='text-danger'>{formik.errors.password}</small>
                    <input type="text" placeholder="enter age" className="form-control m-3" name="age" onChange={formik.handleChange} defaultValue={formik.values.age} />
                    <small className='text-danger'>{formik.errors.age}</small>
                    {/* <input type="text" onChange={handleAddress}/> */}
                    {/* <p>{addresserr}</p> */}
                    {/* <button className="btn btn-primary" onClick={handleSubmit}>submit</button> */}
                    <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>submit</button>
                </div>
            </div>
        </div>
    )
}
