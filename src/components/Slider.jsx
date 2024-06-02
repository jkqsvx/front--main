
import Carousel from 'react-bootstrap/Carousel';

function Slider() {

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/61/3a/ec/caption.jpg?w=1400&h=500&s=1"
          alt="First slide"
          
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/61/39/30/caption.jpg?w=1000&h=400&s=1"
          alt="Second slide"
         
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/47/0e/4d/caption.jpg?w=1400&h=500&s=1"
          alt="Third slide"
          
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;