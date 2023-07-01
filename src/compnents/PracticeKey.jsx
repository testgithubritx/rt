import React, { useState } from 'react';



const PracticeKey=()=>{
    const [value, setValue] =useState();
    const [item, setItem] =useState([]);
    
    const changeKey=(e)=>{
        setValue(e.target.value);
    }
    

    const handleAdd=()=>{
        if(value !=='' && item !==''){
            setItem([...item,value]);
            setValue('');
        }
    };

    const handleDelete=(e)=>{
        setItem(item.filter((currele)=>currele !== e))
        
    }

    return(
        <>
        <center>
        <h1>keys example</h1><br/>
        <input type="text" value={value} onChange={changeKey} />
        <button onClick={handleAdd}>add</button>
        <tr><ul>
            {item.map((items)=>{
                return<li>{items}<button onClick={()=>handleDelete(items)}>Delete</button></li>
            }
            )}
        </ul></tr>

        </center>
        </>
    )
}
export default PracticeKey;