import React,{ useState} from 'react';

const PracticeFunState =()=>{
    const [data,setData]=useState('React');
    const [count,setCount]=useState(0);

    const change=()=>{
        setData("ReactJS");
    }
    const increment=()=>{
        setCount(count+5);
    }

    const decrement=()=>{
        setCount(count-2);
    }

    return(
        <>
        <h1>This is Fun state</h1>
        {data}<br/>
        <button onClick={change}>Submit</button><br/>
        {count}<br/>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default PracticeFunState;