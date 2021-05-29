import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import URL from "../img/Landing.png"

export default function Landing() {   
     return (
      <StyledSearch >
         
         <Link to="/search">
            <button className="button-landing">GO</button>
         </Link>

        
      </StyledSearch>
      
    )
}

const StyledSearch = styled.div`

background-image: url(${URL});  
background-image: no-repeat;
background-image: fixed;
background-image: center;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
   
.button-landing{
    width:90%;
    padding: 1rem 6rem;  
    text-align: center;
    background-color: #f38181ed;    
    border-radius: 1rem;
    border: none;
   
   
}
`