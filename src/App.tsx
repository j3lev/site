import * as React from 'react';
import { Col, Row } from 'reactstrap';
import './App.css';

class App extends React.Component {
  render() {
    const photo = require('./assets/photo.jpg'),
          pdf = require('./assets/Resume.pdf');
    return (
      <div className="container-fluid d-flex align-items-center h-100 app-container">
          <Row className='text-center w-100'>
            <Col xs={12}>
              <div className="text-center">
                <div className="media main-heading d-inline">
                  <img className='img-thumbnail rounded-circle d-inline' style={{ height: '200px', width: '200px' }} src={ photo }/>
                  <div style={{ paddingLeft: '10px' }} className="media-body align-self-center d-inline">
                    <h3 className="display-3">Hi, I'm Joe</h3>
                    <h4>and I make software.</h4>
                    <h4>
                      <a href='https://github.com/josephlevenson' target='_blank'><i className="fa fa-github text-muted" /></a>
                      <a href='https://www.linkedin.com/in/joseph-levenson-91273091' target='_blank'><i className="fa fa-linkedin text-muted" /></a>
                      <a href={pdf} target='_blank'><i className="fa fa-file-text-o text-muted" /></a>
                    </h4>
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
        
    );
  }
}

export default App;
