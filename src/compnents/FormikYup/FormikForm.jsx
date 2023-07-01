import React from 'react'
import { useFormik } from 'formik';
const FormikForm =()=>{

    const formik = useFormik({
        initialValues:{
            name:'',
            add:'',
            email:'',
        },
        onSubmit:(values)=>{
            console.log(values);
            document.write(JSON.stringify(values));
            
        }
        })
   
    return(
        <div>
            <center>
            <h1>example of formik form handle</h1>
            <form onSubmit={formik.handleSubmit}>
                Name:-<input type='text' name='name'  onChange={formik.handleChange} value={formik.values.name}/><br/>
                Address:-<input type='text' name='add' onChange={formik.handleChange} value={formik.values.add} /><br/>
                Email:-<input type='email' name='email' onChange={formik.handleChange} value={formik.values.email}/><br/>
                <button type='submit'>Submit</button>
            </form>
            </center>
        </div>
    )
}
export default FormikForm;