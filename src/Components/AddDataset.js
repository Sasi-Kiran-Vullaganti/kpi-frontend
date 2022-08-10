import React from 'react'
import { Form,Button ,Row, Col } from 'react-bootstrap';

export default function AddDataset() {
  

    return (
      <div>
          <Row className='justify-content-md-center'>
              <Col md={5}>
                <Form>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Control accept='.csv,.xlsx' type="file" size="lg" id="csvf" />
                </Form.Group>
                <center>
                    <Button variant="primary" type="submit" 
                    >Upload Dataset Data</Button>
                </center>
                </Form>
              </Col>
          </Row>
      </div>
    )
  }

