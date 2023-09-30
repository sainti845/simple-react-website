import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design'
    
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Brower Compatibility'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support'
  }
]

function AppServices() {
  return (
    <section id="" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;