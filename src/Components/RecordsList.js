import React,{useState} from 'react'
import axios from 'axios'
import { Row,Col } from 'react-bootstrap';
import { Card,Table  } from 'react-bootstrap'
function RecordsList() {

  const [records,setRecords] = useState([]);

  const fetchrecords=()=>{
    axios.get("http://localhost:8080/api/Records/AllRecords")
    .then((response)=>{
      setRecords(response.data)
    })
  }

  return (
    <div>
      <div>
      <center>
      <div class="d-grid gap-2 col-5 mx-auto">
        <button class="btn btn-primary" onClick={fetchrecords} type="button">Click to load the data from the database......</button>
      </div>
      </center>
      </div><br/>
      <Card className="shadow-lg p-4 mb-5 bg-white rounded">
        <Card.Header>
          <Row>
            <Col>
            <h4>Records List</h4>
            
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project Code</th>
              <th>Y21 Project Name</th>
              <th>Team Name</th>
              <th>Group Name</th>
              <th>Part Name</th>
              <th>SQA</th>
              <th>PLM KPI1</th>
              <th>No of defects</th>
              <th>Time Taken</th>
            </tr>
          </thead>
          <tbody>
          {
        records.map((record)=>{
          return(
            <tr key={record.id}>
                    <td>{record.projectCode}</td>
                    <td>{record.y21ProjectName}</td>
                    <td>{record.teamName}</td>
                    <td>{record.groupName}</td>
                    <td>{record.partName}</td>
                    <td>{record.sqa}</td>
                    <td>{record.plmkpi1}</td>
                    <td>{record.noOfDefects}</td>
                    <td>{record.timeTaken}</td>
            </tr>
          )
        })
      }
          </tbody>
        </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RecordsList