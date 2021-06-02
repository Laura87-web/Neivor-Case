import React from "react"
import styled from "styled-components";

export default function LeyendDetail({result}) {

  let es = Array.isArray(result);

  return (
    <StyleDetail>
      {es ? (
        <>        
        <table>
          <thead>
            <tr>
              <th>Leyenda</th>
              <th>Nombre</th>
              <th>document</th>
              <th>departamento</th>
              <th>nro Cuenta</th>
              <th>tipo de asociacion</th>
            </tr>
          </thead>
          <tbody>
            {
              result.map(elem =>{
                return(
                  <tr>
              <td>{elem.leyenda}</td>
              <td>{elem.name}</td>
              <td>{elem.document}</td>
              <td>{elem.reference}</td>
              <td>{elem.bank_account}</td>
              <td>{elem.match}</td>
            </tr>
                )
              })
              
            }
            
          </tbody>
        </table>
      </>
      ) : (
        <>        
          <table>
            <thead>
              <tr>
                <th>Leyenda</th>
                <th>Nombre</th>
                <th>document</th>
                <th>departamento</th>
                <th>nro Cuenta</th>
                <th>tipo de asociacion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.leyenda}</td>
                <td>{result.name}</td>
                <td>{result.document}</td>
                <td>{result.reference}</td>
                <td>{result.bank_account}</td>
                <td>{result.match}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </StyleDetail>
  );
}


const StyleDetail = styled.div`
  margin: auto;
  text-align: center;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;