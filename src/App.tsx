import * as React from 'react';
import { Col, Row } from 'reactstrap';
import './App.css';

class App extends React.Component {
  render() {
    const photo = require('./assets/photo.jpg');
    return (
      <div className="App">
        <Row>
          <Col xs={8} className='text-center'>
            <div className="media">
              <img className='img-thumbnail rounded-circle' height={200} width={200} src={ photo }/>
              <div style={{ paddingLeft: '10px' }} className="media-body align-self-center">
                <h2 className="display-3">Hi, I'm Joe.</h2>
              </div>
            </div>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
