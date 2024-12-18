import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  footer?: boolean;
}

const NavbarComponent = ({ footer }: Props) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  const handleLinkClick = (path: string) => {
    if (router.pathname !== path) {
      setExpanded(false);
    }
  };

  return (
    <Navbar
      expand="md"
      expanded={footer || expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      style={{
        backgroundColor: footer ? "#1d1c1e" : "",
        marginTop: footer ? "88px" : "15px",
        marginBottom: "15px",
        height: "auto",
      }}
      className="navBarComponent"
    >
      <Container
        className={`px-md-0 py-md-4 px-4 text-center text-md-start ${
          footer ? "justify-content-center" : "justify-content-between"
        }`}
      >
        <Navbar.Brand className="d-flex justify-content-center">
          <Link href={"/"}>
            <img
              src={`/starter-code/assets/shared/desktop/logo-${
                footer ? "light" : "dark"
              }.png`}
              style={{ height: "27px", width: "202px" }}
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>
        {!footer && <Navbar.Toggle aria-controls="navbarScroll" />}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`ms-auto my-2 my-lg-0 ${
              footer ? "flex-column text-center" : ""
            }`}
            style={{
              maxHeight: "200px",
              color: footer ? "#fff" : "",
            }}
            navbarScroll
          >
            <Link
              href="/OurCompany"
              className={`nav-link px-4 ${
                isActive("/OurCompany") ? " fw-bold" : "fw-semibold"
              }`}
              style={{
                color: isActive("/OurCompany")
                  ? "#E7816B"
                  : footer
                  ? "#fff"
                  : "",
              }}
              onClick={() => handleLinkClick("/OurCompany")}
            >
              OUR COMPANY
            </Link>
            <Link
              href="/Locations"
              className={`nav-link px-4 ${
                isActive("/Locations") ? " fw-bold" : "fw-semibold"
              }`}
              style={{
                color: isActive("/Locations")
                  ? "#E7816B"
                  : footer
                  ? "#fff"
                  : "",
              }}
              onClick={() => handleLinkClick("/Locations")}
            >
              LOCATIONS
            </Link>
            <Link
              href="/Contact"
              className={`nav-link px-4 ${
                isActive("/Contact") ? " fw-bold" : "fw-semibold"
              }`}
              style={{
                color: isActive("/Contact") ? "#E7816B" : footer ? "#fff" : "",
              }}
              onClick={() => handleLinkClick("/Contact")}
            >
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
