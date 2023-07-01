import React,{ useState } from 'react';

const PracticeFunInput =()=>{
    const [name,setName]=useState('');

    const handleChangeName=(e)=>{
        setName(e.target.value)
    }

    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(`${name}`)
    }
    return(
        <>
        <center>
        <h1>This is Fun Input</h1>
         <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>Name:-<input type="text" value={name} onChange={handleChangeName}/></td>
                </tr>
                <tr>
                    <td><button >Submit</button></td>
                </tr>
            </table>
         </form>
         </center>
        </>
    )
}
export default PracticeFunInput;