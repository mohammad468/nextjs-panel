import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const NavItems = () => {
  type navItems = {
    nameItem: string;
    id: number;
    href: string;
  }[];

  const navbarItem: navItems = [
    { nameItem: "MyHome", id: 2, href: "/" },
    { nameItem: "About", id: 3, href: "about" },
    { nameItem: "Contact", id: 4, href: "contact" },
  ];

  const [active, setActive] = useState(0);

  return (
    <Navbar className="nav-items" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navbarItem.map((item) => (
              <Link key={item.id} href={item.href}>
                <a
                  className={
                    active === item.id ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    setActive(item.id);
                    console.log(active);
                  }}
                >
                  {item.nameItem}
                </a>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavItems;
