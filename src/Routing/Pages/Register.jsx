import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register =()=>{
    const formik= useFormik({
        initialValues:{
            uName:'',
            email:'',
            pass:'',
            cpass:'',
        },
        validationSchema: Yup.object({
            uName: Yup.string()
            .required('*Fill User Name field*')
            .min(6, '*minimum 6 cherecter*')
            .max(10,'*maximum 10 cherecter*'),

            email: Yup.string()
            .required('*fill email field*')
            .email('*invalid email address*'),

            pass: Yup.string()
            .required('*fill password field*')
            .min(8,'*minimum 8 cherecter*')
            .matches(/[^\w]/, '*atleast 1 special cherecter*')
            .matches(/[A-Z]/, '*atleast 1 uppercase*')
            .matches(/[a-z]/, '*atleast 1 lowercase*')
            .matches(/[0-9]/, '*atleast 1 numeric character*'),

             cpass: Yup.string()
             .required('*fill confirm password*')
             .oneOf([Yup.ref('pass')], '*password not matched*'),

        }),
       
        onSubmit:(values)=>{
            console.log(values);
        }
    })


    return(
          
          <div className="container " >
            <div className="border border-none d-flex flex-row font-size small border border-dark ">
            
             
             <form onSubmit={formik.handleSubmit} >
                <table border="2" className="">
                    
                    <tr className="bg-info">
                        <td className="text-light" style={{textAlign:'center'}}>Name:</td>
                        <td><input className="rounded-pill" type="text" name='uName' value={formik.values.uName} onChange={formik.handleChange} /></td>
                        {formik.touched.uName && formik.errors.uName ? <em>{formik.errors.uName}</em>:null}
                    </tr>
                    <tr className="bg-success">
                        <td className="text-light" style={{textAlign:'center'}}>Email:</td>
                        <td><input className="rounded-pill" type="email" name='email' value={formik.values.email} onChange={formik.handleChange} /></td>
                        {formik.touched.email && formik.errors.email ? <em>{formik.errors.email}</em>:null}
                    </tr>
                    <tr className="bg-info">
                        <td className="text-light" style={{textAlign:'center'}}>Password:</td>
                        <td><input className="rounded-pill" type="text" name='pass' value={formik.values.pass} onChange={formik.handleChange} /></td>
                        {formik.touched.pass && formik.errors.pass ? <em>{formik.errors.pass}</em>:null}
                    </tr>
                    <tr className="bg-success">
                        <td className="text-light">Confirm Password:</td>
                        <td><input className="rounded-pill" type="text" name='cpass' value={formik.values.cpass} onChange={formik.handleChange} /></td>
                        {formik.touched.cpass && formik.errors.cpass ? <em>{formik.errors.cpass}</em>:null}
                    </tr>
                    <tr className="bg-info">
                        <td ></td>
                        <td>
                            <button className="rounded-pill bg-warning text-light" type="submit">Submit</button>
                        </td>
                    </tr>
                    </table>
             </form>
             </div>

        </div>

    )
}

export default Register;