import React from 'react';

const PracticeYupFormHandle=()=>{
    return (
        <>
        
        <h1>Example of yup form validation</h1>
             <form>
        
                 <table border="1">
                    <tr>
                        <td>Name:-</td>
                        <td><input type="text" name='uName' /></td>
                      
                    </tr>
                <tr>
                    <td><button>submit</button></td>
                </tr>
                </table>
        </form>
        </>
    )
}
export default PracticeYupFormHandle;