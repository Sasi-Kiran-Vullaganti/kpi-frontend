import React, { Component } from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class NavigationBar extends Component {
  render() {
    return (
        <Navbar bg="success" variant='dark' expand="lg">
        <Container>
          <Link to={""} className='navbar-brand'> KPI-Dashboard </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
                <Link to={""} className="nav-link">Dashboard</Link>
                <Link to={"AddRecord"} className="nav-link">Add Record</Link>
                <Link to={"RecordsList"} className="nav-link">Records List</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
