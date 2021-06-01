import React, { useState } from 'react';
import styled from "styled-components";
import {getMatch} from "../requestsAPI/getMatch"

export default function MatcherSearch({setResult}) {
  const [value, setValue] = useState("")
       
  function handlerChange(e){
     setValue(e.target.value) 
     console.log("imput cambiando",e.target.value)
  }
  
  async function handlerSubmit(e){   
    e.preventDefault() 
    if(value){
      const res = await getMatch(value)      
      setResult(res)    
    }else{
      alert("ingrese algun dato antes de apretar boton de busqueda")
    } 
               
  }   
 
  return (
    <StyledSearch >
    <div>
      <form onSubmit={handlerSubmit}>
        <input  name="leyenda"type="text" onChange={handlerChange} value={value} />
        <button type="submit">Buscar</button>
      </form>     
      </div>
    </StyledSearch>
  );
  
};

const StyledSearch = styled.div`

input[type=text], select {
width: 60%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
}

button[type=submit] {
width: 30%;
background-color: #f38888;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
}

button[type=submit]:hover {
background-color: #ee6d6d;
}

div {
  width: 70%;
  margin:auto;
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
}

`