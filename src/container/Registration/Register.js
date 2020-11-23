import React , {useState} from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Register.css'
function FormPage() {
  const [hasSchoolarship, setHasSchoolarship] = useState(false);
  const handleInput = (e) => {
    setHasSchoolarship(e.target.value === "Added" ? true : false);
  }
  return (
      <Container Container fluid id='container'>
        <Container id="form-container">
        <h2 id="main">Edit User Registration</h2>
    <Form>
  <Form.Group>
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Father's Name</Form.Label>
    <Form.Control type="text" placeholder="Father's Name" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Date Of Brith</Form.Label>
    <Form.Control type="date" id="birthday" name="birthday"/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Your Address "/>
  </Form.Group>
  <Row>
  <Col>
  <Form.Group>
    <Form.Label>Phone number</Form.Label>
    <Form.Control placeholder="Phone Number "/>
  </Form.Group>
  </Col>
  <Col>
  <Form.Group>
    <Form.Label>Extra Phone number</Form.Label>
    <Form.Control placeholder="Extra Phone Number"/>
  </Form.Group>
  </Col>
  </Row>
  <Container id='radio1'>
   <Row>
    <Col>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={5}>
        Sex:
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Male"
          name="formHorizontalRadiosa"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadiosa"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={5}>
        Scholarship:
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          onClick={handleInput}
          type="radio"
          label="Yes"
          name="formHorizontalRadioss"
          id="formHorizontalRadios1"
          value="Added"
        />
        <Form.Check
          onClick={handleInput}
          type="radio"
          label="No"
          name="formHorizontalRadioss"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
    </Col>

    <Col>
      <Form.Group as={Row}>
      <Form.Label as="legend" column sm={5}>
        Payment:
      </Form.Label>
      <Col sm={10}>
        <Form.Control disabled={hasSchoolarship ? !"disabled"  : "disabled"} id="outlined-basic" label="Payment" variant="outlined"  />
      </Col>
    </Form.Group>
    </Col>
  </Row>
</Container> 

{/* End of radio1 */}

<Container id='radio2'>
    
    <Row>
      <Col>
      <Form.Label>State</Form.Label>
        <Form.Group as={Row}>
        
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Adding existing group"
          name="formHorizontalRadiosss"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Waiting for a new group"
          name="formHorizontalRadiosss"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
      </Col>
      <Col>
        <Form.Label>Course</Form.Label>
    <Form.Control as="select" size="sm" custom>
      <option>1-Bosqich</option>
      <option>2-Bosqich</option>
      <option>3-Bosqich</option>
      <option>4-Bosqich</option>
      <option>5-Bosqich</option>
    </Form.Control>
      </Col>
    </Row>   
</Container>
{/* End of radio2 */}

<Container id='radio2'>
  <Row>
     <Col>
        <Form.Label>Groups</Form.Label>
       <Form.Control as="select" size="sm" custom>
        <option>Shohida</option>
        <option>Shaxbozbek</option>
        <option>Muqaddam</option>
        <option>Samandar</option>
        <option>Maftuna</option>
    </Form.Control>
      </Col>

      <Col>
        <Form.Label>Advertise</Form.Label>
       <Form.Control as="select" size="sm" custom>
        <option>Radio</option>
        <option>TV</option>
        <option>form Friends</option>
        <option>Gazeet</option>
        <option>Other</option>
    </Form.Control>
      </Col>
  </Row>
</Container>

    <Container id='text-area'>
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder='Typin...'/>
    </Container>


</Form>
    <Button variant="primary" type="submit">
    Submit
  </Button>

        </Container>
    </Container>
  );
}

export default FormPage;
