import Carousel from 'react-bootstrap/Carousel';

function SliderDetail({images, title}) {

    return (
        <Carousel>
            {images.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item}
                        alt={`Slide ${index}`}
                        height='600px'
                    />
                    <Carousel.Caption>
                        <h1>{title}</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default SliderDetail;
