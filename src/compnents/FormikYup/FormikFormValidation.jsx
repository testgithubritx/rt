import React from 'react';
import { useFormik } from 'formik';

const validate =(values)=>{
    const errors ={};
    if(!values.name){
        errors.name ="required";
    }else if(values.name.length>10){
        errors.name= "must be with in 10 cherecter"
    }
    
    if(!values.email){
        errors.email="required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._-]+.[A-Z]{2,4}$/i.test(values.email)){
        errors.email='invalid email';
    }

    return errors;
}


const FormikFormValidation =()=>{
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
        },
        validate,
        onSubmit:(values)=>{
            console.log(values);
            document.write(JSON.stringify(values));
        }
    }

    )


    return(
        <div>
            <center>
                <h1>Formik form validation</h1>
            <form onSubmit={formik.handleSubmit}>
                Name:-<input type="text" name='name' onChange={formik.handleChange} value={formik.values.name}/>
                {formik.errors.name ? <span>{formik.errors.name}</span>:null}
                <br/><br/>
                Email:-<input type="email" name='email' onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <span>{formik.errors.email}</span>:null}<br/>
                <button>Submit</button>

            </form>
            </center>
        </div>

    )
}
export default FormikFormValidation;