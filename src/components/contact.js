import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './contact.css'
function AppContact() {
  return (
    <section id="" >
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <div className='contact-button-div'>
          <Button type="submit">Contact us</Button>
        </div>
        
        
      </Container>
    </section>
  );
}

export default AppContact;