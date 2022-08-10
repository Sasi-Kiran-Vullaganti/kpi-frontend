import './App.css';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AddRecord from './Components/AddRecord';
import RecordsList from './Components/RecordsList';
import { Container,Row,Col } from 'react-bootstrap';
import AddDataset from './Components/AddDataset';

function App() {
  const marginTop = {
    marginTop:"20px"
  };
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Dashboard}/>
              <Route path="/AddRecord" exact component={AddRecord}/>
              <Route path="/AddDataset" exact component={AddDataset}/>
              <Route path="/RecordsList" exact component={RecordsList}/>
            </Switch>
          </Col>
        </Row>
    </Container>
    </Router>
  );
}

export default App;
