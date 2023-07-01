import React from 'react';
import {useState} from 'formik';

const PracticeFormikFormValidation =()=>{

    return(
        <>
        <center>
        <h1>This is formik form validation</h1>
        <form>
            <table border="1">
                <tr>
                    <td>Name:</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td><button>Submit</button></td>
                </tr>
                <span></span>
            </table>
        </form>
        </center>
        </>
    )
}
export default PracticeFormikFormValidation;