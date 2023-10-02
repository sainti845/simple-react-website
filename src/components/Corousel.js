import Carousel from 'react-bootstrap/Carousel';
import './Corousel.css'
var corouselData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    }
]

function Corousel() {
  return (
    <section id="corousel" className="">
       <Carousel>
          {
            corouselData.map(item => {
              return (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100 "
                    src={item.image}
                    alt={"slide " + item.id}
                  />
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default Corousel;