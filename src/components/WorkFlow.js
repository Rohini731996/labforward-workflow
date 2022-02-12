import React from "react";
import DragnDropNode from './DragnDropNodes'
import { Row, Col, Container } from "react-bootstrap";
import MaterialsTable from "./SOPTable/MaterialsTable";
import DataTable from "./SOPTable/DataTable";
import CalculationTable from "./SOPTable/CalculationTable";


export default function WorkFlow() {

  return (
    <div>
      <h1>Labforward-Workflow</h1>
     <DragnDropNode /> 
   
     <DataTable/>
     <CalculationTable/>
     <MaterialsTable/> 
    </div>
  );
}
