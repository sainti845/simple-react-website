import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about.css'

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img6.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6} >
            <Image src={img1} className='image-about' />
          </Col>
          <Col sm={6} className='about'>
            <p>At ZAUCA, we're dedicated to bringing your digital aspirations to life. Our team of skilled designers and developers work tirelessly to create visually stunning websites that not only captivate your audience but also deliver exceptional user experiences.</p>
                      
          </Col>
        </Row>
        <Row>
          
          <Col sm={6} className='about'>
          <p>  Beyond just web design, we're your partners in digital success, crafting tailored strategies to drive growth and results. Our commitment to responsive design means your website will shine on all devices. Explore our diverse portfolio and discover how we've empowered businesses across various industries to thrive in the digital age. Choose ZAUCA for a transformative online journey.</p>
                      
          </Col>
          <Col sm={6}>
            <Image src={img2} className='image-about' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;