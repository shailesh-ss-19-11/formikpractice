import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'
import AddUser from './user/AddUser';
function App() {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  }

  let validationSchema = Yup.object().shape({
    name: Yup.string().required("this field is requred").min(12).max(20),
    email: Yup.string().email().required("this field is requred"),
    password: Yup.string().required("this field is requred")
  })

  const handleSubmit = (values) => {
    console.log("hello", values)
  }

  const obj = {
    id:1,
    name:"shailesh",
    email:"shail@g.com",
    password:"123123123"
  }
  return (
    // <div className="App">
    //   <div className="container">
    //     <div className="col-md-12 text-center">
    //       <h1>formik implementation</h1>
    //       <Formik
    //         initialValues={defaultValues}
    //         validationSchema={validationSchema}
    //         onSubmit={handleSubmit}
    //       >
    //         <Form>
    //           <input type="text" placeholder="enter your name" className="form-control m-3" name="name" />
    //           <small className='text-danger'><ErrorMessage name='name' /></small>

    //           <input type="text" placeholder="enter your email" className="form-control m-3" name="email" />
    //           <small className='text-danger'><ErrorMessage name='email' /></small>

    //           <input type="text" placeholder="enter your password" className="form-control m-3" name="password" />
    //           <small className='text-danger'><ErrorMessage name='password' /></small>
    //           {/* <button className="btn btn-primary" onClick={handleSubmit}>submit</button> */}
    //           <button type='submit' className="btn btn-primary">submit</button>
    //         </Form>
    //       </Formik>
    //     </div>
    //   </div>
    // </div>
    <AddUser obj={obj}/>
  );
}

export default App;
