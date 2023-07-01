import React,{ useRef } from 'react';

const RefExample =()=>{
    const myRef= useRef('');

    const handleShow=()=>{
        console.log(myRef.current.value)
    }
    const handleFocus=()=>{
        myRef.current.focus();
    }


    return(
          <>
          <h1>example of react ref </h1>
          <input type="text" ref={myRef} />
          <button onClick={handleShow}>show</button>
          <button onClick={handleFocus}>focus</button>
          </>
    )
}
export default RefExample;