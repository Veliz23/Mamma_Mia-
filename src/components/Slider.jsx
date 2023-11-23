import { Carousel } from "react-bootstrap";

export default function Slider() {
    return (
    <Carousel>
        <Carousel.Item>
        <div className="overlay"></div>
        <img
            className="d-block w-100 img_slider"
            src="https://i.pinimg.com/564x/f5/02/fc/f502fc95739e144c6dc1a686cb177ebc.jpg"
            alt="primera foto pizza"
        />
        <Carousel.Caption>
            <h3> MAMMA MIA</h3>
            <p>Tenemos las mejores pizzas que podras encontrar! </p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="overlay"></div>
        <img
            className="d-block w-100 img_slider"
            src="https://i.pinimg.com/564x/45/ee/81/45ee81d2a7995cadab7c20ab8cdaf6e4.jpg"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Directo a tu Casa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="overlay"></div>
        <img
            className="d-block w-100 img_slider"
            src="https://mundosjumbo.cl/wp-content/uploads/sites/3/2019/06/GettyImages-964287238-1-1.jpg"
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Con los mejores ingredientes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </Carousel.Caption>

        </Carousel.Item>
    </Carousel>
    );
};
