import React, {useState} from 'react';

const initialValue =[
    {id:1, name:'kartick'},
    {id:2, name:'dip'},
    {id:3, name:'subham'},
    {id:4, name:'rahul'},
    {id:5, name:'debraj'},
    

];

const KeysExample =()=>{
    const [value, setValue]= useState(initialValue)

    const handleDelete =(id)=>{
        setValue(value.filter((e)=> e.id !== id));
    }
    return(
        <>
        
            <h1>Keys Example</h1>
            <ul>
                {value.map((item)=>{
                    return(
                    <li key={item.id}>{item.name}
                    <button onClick={()=> handleDelete(item.id)}>Delete</button>

                    </li>
                    )
                })}
            </ul>
        
        </>
    )
}
export default KeysExample;