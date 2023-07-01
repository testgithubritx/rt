import React, {useState} from 'react';
const FunInput =()=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [add, setAdd]=useState('');

    const handleChangeName =(e)=>{
        setName(e.target.value)
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleChangeAdd=(e)=>{
        setAdd(e.target.value)
    }
    
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(`${name} & ${email} & ${add} `);
    }
    return(
        <div>
        <h1>this is function input</h1>
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>Name:-</td>
                    <td><input type="text" value={name} onChange={handleChangeName} /></td>
                </tr>
                <tr>
                    <td>Email:-</td>
                    <td><input type="text" value={email} onChange={handleChangeEmail} /></td>
                </tr>
                <tr>
                    <td>Add:-</td>
                    <td><input type="text" value={add} onChange={handleChangeAdd} /></td>
                </tr>
                <tr>
                    <td>
                        <button>submit</button>
                    </td>
                </tr>
            </table>
        </form>
        </div>
    )
}
export default FunInput;