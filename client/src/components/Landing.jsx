import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import URL from "../img/bacground.png"

export default function Landing() {   
     return (
      <StyledSearch >
         <h1>Neivor - Case</h1>
         <h2>¿Quien Hizo El Pago?</h2>

         <Link to="/home">
            <button className="button-landing">GO</button>
         </Link>

        
      </StyledSearch>
      
    )
}

const StyledSearch = styled.div`


/* background-image: url(${URL});  */
background-color: #0a0a0a;
width: 100%;
height: 100%;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color:  #f38181ed;
   

   .button-landing {
    /* width: 90%; */
    padding: 20px 60px;
    /* text-align: center; */
    background-color: #f38181ed;
    border-radius: 1rem;
    border: none;
    display: flex;
    justify-content: center;
    /* text-decoration: none; */
}

`