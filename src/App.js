import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

 class App extends Component {
  render() {
    return (
      <div>
          <Button variant="outline-primary">Edit</Button>
          <Button variant="outline-danger">Delete</Button>

      </div>
    )
  }
}

export default App
