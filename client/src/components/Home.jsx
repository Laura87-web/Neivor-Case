import React, { useEffect, useState } from 'react';
import LeyendDetail from "./LeyendDetail"
import MatcherSearch from "../components/MatcherSearch"
import styled from "styled-components";
import UploadExcel from './UploadExcel';


export default function Home(){
    const[result, setResult] = useState()  
    const[excel, setExcel]= useState()
  
  //   function handlerUpload(e){
  //      e.preventDefault()
  //      console.log("esto tiene e", e)
       
  //      uploadExel(e.name)
  //  }
   function handleOnClick(){
     setResult("")
     setExcel("")
   }
      useEffect(() => {
      }, [result, excel]) 
    
    return (
      <StyledHome>
        <br />
        <br />
        <h1>Encuentre Los Datos</h1>

        {result ? (
          <>
            <MatcherSearch setResult={setResult} />
            <LeyendDetail result={result} /><br />
            
            <button  onClick = {handleOnClick}>volver</button>
           
          </>
        ) : excel ? (
          <>
            <h2>- Tabla con coincidencias -</h2>
           
            <LeyendDetail result={excel} /><br /><br />
            <button  onClick = {handleOnClick}>volver</button>
          </>
        ) : (
          <div>
            <h3>ingrese una Leyenda</h3>
            <MatcherSearch setResult={setResult} />
            <br />
            <hr />
            <h3>o agregue archivo Excel con resumen de cuenta</h3>
            <UploadExcel setExcel={setExcel} />
          </div>
        )}
      </StyledHome>
    );
}

const StyledHome = styled.div`


    width: 70%;
    text-align: center;
    margin:auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  
  `
  
