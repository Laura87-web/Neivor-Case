import React from "react"
import styled from "styled-components";

export default function LeyendDetail({result}) {
  return (
    <StyleDetail>
      {result !== "no hubo coincidencias" ? (
        <>
          <span> {result.leyend} </span>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>document</th>
                <th>departamento</th>
                <th>nro Cuenta</th>
                <th>tipo de asociacion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{result.name}</td>
                <td>{result.document}</td>
                <td>{result.reference}</td>
                <td>{result.bank_account}</td>
                <td>{result.match}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>{result}</p>
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