import React, { useState } from 'react';
import fs from "fs"
import axios from "axios"
// import {buscar} from "../../actions"
// import { useDispatch } from 'react-redux';
import {getMatch} from "../requestsAPI/getMatch"

export default function Buscador() {
    const [value, setValue] = useState("")
    // const dispatch = useDispatch()
       
    function handlerChange(e){
       setValue(e.target.value) 
       console.log("imput cambiando",e.target.value)
    }
    function handlerSubmit(e){    
       e.preventDefault()
      getMatch(value)
      
      
    }    
    return (
      <div className="buscador">
          <form className="form-buscador"
            onSubmit={handlerSubmit}>
            <input 
              type="search"
              onChange={handlerChange}
              value = {value}                
            />
            <button type="submit">Buscar</button>
          </form>
      </div>
    )
    
  };