import React, { useState } from 'react';
import styled from "styled-components";
import uploadExel from '../requestsAPI/uploadExcel';

export default function UploadExcel({setExcel}) {
  const [archivo, setArchivo] = useState(null)
       
//   const subirArchivo = e=>{
//       setArchivo(e)
//   }

// function handlerChange(e){
//     setArchivo(e.target.value) 
//     console.log("imput cambiando",e.target.value)
//  }
  async function handlerSubmit(e){   
    e.preventDefault()  
   
     const pedido = await uploadExel()  
    //  console.log("pedidoooooo",pedido)  
     setExcel(pedido) 
    
               
  }   
 
  return (
    <StyledUpload >
    <div>
      <form onSubmit={handlerSubmit}>
        <input  name="file" type="file"   />
        <button type="submit">Subir Archivo</button>
      </form>     
      </div>
    </StyledUpload>
  );
  //onChange={handlerChange} value={archivo}
};

const StyledUpload = styled.div`

input[type=file], select {
width: 60%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;

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



`