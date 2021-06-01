import React, { useEffect, useState } from 'react';
import fs from "fs"
import LeyendDetail from "./LeyendDetail"
import MatcherSearch from "../components/MatcherSearch"
import uploadExel from "../requestsAPI/uploadExcel"
import styled from "styled-components";


export default function Home(){
    const[result, setResult] = useState()  
  
    function handlerUpload(e){
       e.preventDefault()
       console.log("esto tiene e", e)
       
       uploadExel(e.name)
   }
   
      useEffect(() => {
      }, [result]) 
    
    return (
      <StyledHome>
          <h1>Encuentre Los Datos</h1>
          <h3>ingrese una Leyenda</h3>
          
        <MatcherSearch setResult={setResult} />
        {result ? (
          <LeyendDetail result={result} />
        ) : (
          <p></p>
        )}
        <div>
            <h3>o agregue archivo Excel con resumen de cuenta</h3>
            <form onSubmit={handlerUpload} 
            enctype="multipart/form-data">
        <input type="file" name="sampleFile" />
        <input type='submit' value='Upload!' />
    </form>     
        </div>
      </StyledHome>
    );
}

const StyledHome = styled.div`

    width: 70%;
    
    margin:auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  
  `
  
