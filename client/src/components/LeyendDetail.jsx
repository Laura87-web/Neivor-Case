import React from "react"
import styled from "styled-components";

export default function LeyendDetail({name,  document,  dto,  bank,  leyend,  match,}) {
  return (
    <div>
      <span>" {leyend} "</span>
      <StyleTable>
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
            <td>{name}</td>
            <td>{document}</td>
            <td>{dto}</td>
            <td>{bank}</td>
            <td>{match}</td>
          </tr>
        </tbody>
      </StyleTable>
    </div>
  );
}


const StyleTable = styled.table`
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

tr:nth-child(even) {
  background-color: #dddddd;
}
`