import React from 'react';
import {useFormik} from 'formik';

const PracticeFormikFormHandle =()=>{
    const formik= useFormik(
        {
            initialValues:{
                name:'',
            },
        
        onSubmit:(values)=>{
          console.log(values);
          document.write(JSON.stringify(values));
        }
    }
    )

    return(
        <>
        <h1>This is formikmform </h1>
        <form onSubmit={formik.handleSubmit}>
            <table>
                <tr>
                    <td>Name:- <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} /></td>
                </tr>
                <tr>
                    <td><button>Submit</button></td>
                </tr>
            </table>
        </form>
        </>
    )
}
export default PracticeFormikFormHandle;