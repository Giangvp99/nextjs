import React from "react";
import { Navbar, Nav, Container, NavDropdown, FormControl } from "react-bootstrap"
import styles from "../../styles/bot-header.module.scss"
export default function Bottom() {
    return (
        <div className={`${styles.background} p-2`}>
        <Navbar variant="light" >
            <Container>
                <div className="d-flex flex-row align-items-center w-100">
                    <NavDropdown title="Каталог тканей" id="navbarScrollingDropdown" className={`${styles.color}`}>
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    <FormControl
                        placeholder="Search..."
                        aria-describedby="basic-addon2"
                        className={`me-auto ${styles.search} `}
                    />
                    <Nav className="">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
        </div>
    );
}
