import React,{useState} from 'react';

const FunState=()=>{
    const [data,setData]= useState('Angular');
    const [count,setCount]= useState(0);
    const change=()=>{
        setData('react');
    }
    const incress=()=>{
        setCount(count+5);
    }
    const decress=()=>{
        setCount(count-1);
    }

    return(
        <center>
        <div>   
        <h1>KARTICK</h1>
        {data}<br/>
        <button onClick={change}>submit</button><br/>
        {count}<br/>
        <button onClick={incress}>Incress</button>
        <button onClick={decress}>Decress</button>


        </div>
        </center>
    )
}
export default FunState;