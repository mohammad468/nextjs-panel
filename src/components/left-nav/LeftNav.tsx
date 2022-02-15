import React from "react";
import Link from "next/link";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import { useState } from "react";

// ? icons
import { BsCart3 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

function LeftNav(props: any) {
  type navItems = {
    nameItem: string;
    id: number;
    href: string;
    icon: any;
  }[];

  const leftNavItem: navItems = [
    {
      nameItem: "home",
      id: 1,
      href: "/",
      icon: <BiHomeAlt className="me-2" />,
    },
    {
      nameItem: "about",
      id: 2,
      href: "about",
      icon: <BsCart3 className="me-2" />,
    },
    {
      nameItem: "contact",
      id: 3,
      href: "contact",
      icon: <BsCart3 className="me-2" />,
    },
    {
      nameItem: "product",
      id: 4,
      href: "product",
      icon: <BsCart3 className="me-2" />,
    },
  ];

  const leftSportItem: navItems = [
    {
      nameItem: "home",
      id: 5,
      href: "/",
      icon: <BiHomeAlt className="me-2" />,
    },
    {
      nameItem: "about",
      id: 6,
      href: "about",
      icon: <BsCart3 className="me-2" />,
    },
    {
      nameItem: "contact",
      id: 7,
      href: "contact",
      icon: <BsCart3 className="me-2" />,
    },
    {
      nameItem: "product",
      id: 8,
      href: "product",
      icon: <BsCart3 className="me-2" />,
    },
    {
      nameItem: "price",
      id: 9,
      href: "price",
      icon: <BsCart3 className="me-2" />,
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      <Row>
        <Col
          xxl="2"
          xl="2"
          lg="3"
          md="3"
          className="bg-navbar"
          style={{
            maxHeight: "calc(100vh - 58px)",
            overflowY: "auto",
          }}
        >
          <div className="py-2 px-3 my-2">
            <Row className="search-left-nav py-2 px-2 my-2 d-flex ">
              <Col xxl="2" xl="2" lg="2" md="2">
                <BiSearch className="col text-white search-icon-left-nav" />
              </Col>
              <Col>
                <input
                  className="mt-2 col-xxl-12 col-xl-12 col-lg-12 col-md-12 search-input-left-nav"
                  placeholder="Search"
                />
              </Col>
            </Row>
          </div>
          {/* // ? start navigation */}
          <div>
            <h1 className="text-white text-capitalize header-left-nav mt-3 ms-4">
              navigation
            </h1>
            {leftNavItem.map((item) => (
              <div className="d-flex navbar-items" key={item.id}>
                <Link href={item.href}>
                  <a
                    className={
                      active === item.id
                        ? "text-decoration-none py-2 px-3 my-2 navbar-item-active text-capitalize d-flex align-items-center"
                        : "text-decoration-none py-2 px-3 my-2 navbar-item text-capitalize d-flex align-items-center"
                    }
                    onClick={() => {
                      setActive(item.id);
                      console.log(active);
                    }}
                  >
                    {item.icon}
                    {item.nameItem}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          {/* // ? start navigation */}

          {/* // ? start sports */}
          <div>
            <h1 className="text-white text-capitalize header-left-nav mt-3 ms-4">
              navigation
            </h1>
            {leftSportItem.map((item) => (
              <div className="d-flex navbar-items" key={item.id}>
                <Link href={item.href}>
                  <a
                    className={
                      active === item.id
                        ? "text-decoration-none py-2 px-3 my-2 navbar-item-active text-capitalize d-flex align-items-center"
                        : "text-decoration-none py-2 px-3 my-2 navbar-item text-capitalize d-flex align-items-center"
                    }
                    onClick={() => {
                      setActive(item.id);
                      console.log(active);
                    }}
                  >
                    {item.icon}
                    {item.nameItem}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          {/* // ? start sports */}
        </Col>
        <Col className="bg-darker m-0 p-0">{props.children}</Col>
      </Row>
    </>
  );
}

export default LeftNav;
