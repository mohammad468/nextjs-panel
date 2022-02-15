import React from "react";
import { Carousel, Col, Image } from "react-bootstrap";

const SlideShow = () => {
  var items = [
    {
      id: 3,
      name: "Random Name #3",
      image:
        "https://api.freerealapi.com/upload/images/2021/10/6/earthquake.jpg",
      description: "Hello World!",
    },
    {
      id: 4,
      name: "Random Name #4",
      image:
        "https://api.freerealapi.com/upload/images/2021/10/5/snow-mountains-01.jpg",
      description: "Hello World!",
    },
  ];

  return (
    <Col className="ms-2 my-3 rounded my-rounded bg-dark" xxl="8">
      <Carousel className="my-rounded">
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
    </Col>
  );
};

export default SlideShow;
