import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Map from '../components/map';

{/* 
  Citation for following code:
  Date: 10/12/2022

  Title: "Cards"
  Source URL: https://react-bootstrap.github.io/components/cards/

  Title: "Grid system"
  Source URL: https://react-bootstrap.github.io/layout/grid/
*/}

function GetStartedPage() {
  return (
    <Container fluid id='start'>
        <Row className='left-align'><h5>Get Started</h5></Row>
        <Row className='left-align'><h1>Set A Reminder</h1></Row>
        <Row>
            <Col>
                <Card>
                <Card.Body>
                    <Card.Text>
                        <Map></Map>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card.Header as="h5" className='get-started-card'>Map</Card.Header>
            </Col>
        </Row>
    </Container>
  );
}

export default GetStartedPage;