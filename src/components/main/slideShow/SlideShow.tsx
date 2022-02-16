import React from "react";
import { Carousel, Col, Image } from "react-bootstrap";

const SlideShow = () => {
  var items = [
    {
      id: 1,
      name: "Random Name #1",
      image:
        "https://api.freerealapi.com/upload/images/2021/10/6/earthquake.jpg",
      description: "Hello World!",
    },
    {
      id: 2,
      name: "Random Name #2",
      image:
        "https://api.freerealapi.com/upload/images/2021/10/5/snow-mountains-01.jpg",
      description: "Hello World!",
    },
  ];

  return (
    <Col className="ms-2 my-3 rounded my-rounded bg-dark" xxl="6">
      <div className="my-rounded">
        <Carousel className="my-rounded" fade>
          {items.map((item) => (
            <Carousel.Item key={item.id} className="my-rounded">
              <Image
                className="d-block w-100 my-rounded"
                src={item.image}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Col>
  );
};

export default SlideShow;
