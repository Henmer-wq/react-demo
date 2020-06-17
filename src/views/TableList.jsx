import React, { Component } from "react";
// import Viewer from '@phuocng/react-pdf-viewer';
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Zoom from "components/Zoom/Zoom.jsx";
import Datos from "components/Table/Table";
// import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6}>
            <Datos/>
              <Card
                title="Example"
                category="Subtitulo"
                ctTableFullWidth
                ctTableResponsive
                content={
                  // <Table striped hover>
                  //   <thead>
                  //     <tr>
                  //       {thArray.map((prop, key) => {
                  //         return <th key={key}>{prop}</th>;
                  //       })}
                  //     </tr>
                  //   </thead>
                  //   <tbody>
                  //     {tdArray.map((prop, key) => {
                  //       return (
                  //         <tr key={key}>
                  //           {prop.map((prop, key) => {
                  //             return <td key={key}>{prop}</td>;
                  //           })}
                  //         </tr>
                  //       );
                  //     })}
                  //   </tbody>
                  // </Table>
                  <Table striped hover>
{/* 
                    <thead>
                      <tr>
                        <th>Grp</th>
                        <th>Cuentas</th>
                        <th></th>
                        <th>Valor</th>
                        <th>Subcuentas</th>
                        <th>Valor</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td></td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Test</td>
                        <td></td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Test</td>
                        <td></td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Test</td>
                        <td></td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      
                    </tbody> */}
                  </Table>
                }
              />
            </Col>
            <Col md={6}>
              <Zoom/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
