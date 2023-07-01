import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const YupFormValidation =()=>{
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
        <div>
            
             <h1>Example of yup form validation</h1>
             <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <legend>Registration Form</legend>
                    <tr>
                        <td>Name:-</td>
                        <td><input type="text" name='uName' value={formik.values.uName} onChange={formik.handleChange} /></td>
                        {formik.touched.uName && formik.errors.uName ? <em>{formik.errors.uName}</em>:null}
                    </tr>
                    <tr>
                        <td>Email:-</td>
                        <td><input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} /></td>
                        {formik.touched.email && formik.errors.email ? <em>{formik.errors.email}</em>:null}
                    </tr>
                    <tr>
                        <td>Password:-</td>
                        <td><input type="text" name='pass' value={formik.values.pass} onChange={formik.handleChange} /></td>
                        {formik.touched.pass && formik.errors.pass ? <em>{formik.errors.pass}</em>:null}
                    </tr>
                    <tr>
                        <td>Confirm Password:-</td>
                        <td><input type="text" name='cpass' value={formik.values.cpass} onChange={formik.handleChange} /></td>
                        {formik.touched.cpass && formik.errors.cpass ? <em>{formik.errors.cpass}</em>:null}
                    </tr>
                    <tr>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </fieldset>
             </form>

        </div>

    )
}

export default YupFormValidation;