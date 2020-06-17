import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

componentDidMount() {
    axios.get("users.json")
      .then(response => {
        this.setState({
          todos: response
        });
      })
  }

  
  // componentDidMount() {
  //   axios.post("http://35.174.208.143:1232/path")
  //     .then(response => {
  //       this.setState({
  //         todos: response.data,
  //         data: {
  //           ef: 'files/900327563EEFFIFRS.tif',
  //           nc: 'Prueba #54',
  //           tipoArchivo : '1',
  //           columna: '1'
  //         }
  //       });
  //     })
  // }

  
  

  render() {
    const { todos = [] } = this.state;
    return (
      <div className="content">
        <Grid fluid>
        <Row>
        <Col md={13}>
              <Card
                title="Reclasificado informacion financiera"
                category="Subtitulo"
                ctTableFullWidth
                ctTableResponsive
                content={
                <Table striped hover>
                  <thead>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
            {todos.length ? 
              todos.map(todo => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.username}</td>
                  <td>{todo.email}</td>
                </tr>
              ))
              : 
                    (<tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>)
                  }
                  </tbody>
                </Table>
                }
                />
              </Col>
              <Col md={13}>
                {/* <Zoom/> */}
              </Col>
            </Row>
              </Grid>
            </div>
          );
        }
      }

export default App;