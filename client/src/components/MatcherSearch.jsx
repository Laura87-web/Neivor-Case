import React, { useEffect, useState } from 'react';
import fs from "fs"
import axios from "axios"
import LeyendDetail from "./LeyendDetail"
import {getMatch} from "../requestsAPI/getMatch"

export default function Buscador() {
    const [value, setValue] = useState("")
    const[result, setResult] = useState()
    
    // const dispatch = useDispatch()
       
    function handlerChange(e){
       setValue(e.target.value) 
      //  console.log("imput cambiando",e.target.value)
    }
    async function handlerSubmit(e){    
       e.preventDefault()
      
     const res = await getMatch(value)
     console.log("res ---- >", res)
     setResult(res)
     setValue("")
      
      
    }   
    useEffect(() => {
    }, [result]) 
    return (
      <div className="buscador">
        <form className="form-buscador" onSubmit={handlerSubmit}>
          <input type="search" onChange={handlerChange} value={value} />
          <button type="submit">Buscar</button>
        </form>
        {result ? (
          <LeyendDetail
          leyend = {result.leyenda}
          name ={result.name}
          dto = {result.reference}
          document = {result.document}
          bank = {result.bank_account}
          match = {result.match}
          /> 
        ) : (
          <p>Ingrese aqui la leyenda...</p>
        )}
      </div>
    );
    
  };


