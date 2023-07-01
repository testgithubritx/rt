import React, {useState} from 'react';
const FunInput1=()=>{
    const[name,setName]=useState('');
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('f1').innerHTML=name;
    }
    return(
        <div>
        <h1>this is input</h1>
        <form onSubmit={handleSubmit}>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td><input type="text" value={name} onChange={handleChangeName} /></td>
                </tr>
                <tr>
                    <td><button>submit</button></td>
                </tr>
                <tr>
                    <td><span id="f1"></span></td>
                </tr>
            </table>
        </form>
        </div>
    )
}
export default FunInput1;