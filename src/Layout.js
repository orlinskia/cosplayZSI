import { Outlet } from "react-router-dom";
import { Container, Image, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "./Footer";

let Layout = () => {
    return (

        <div id="layout">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <Image src="https://www.zsi.kielce.pl/wp-content/uploads/2020/03/logo-desktop.png" height={40} />
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <LinkContainer to="/">
                                <Nav.Link>Strona główna</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/regulamin">
                                <Nav.Link>Regulamin</Nav.Link>
                            </LinkContainer>

                            {/* <LinkContainer to="/uczestnicy">
                                <Nav.Link>Uczestnicy</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/galeria">
                                <Nav.Link>Galeria</Nav.Link>
                            </LinkContainer> */}

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzAFTPA6JiO8JzCO2d-uwiFx7Jlo7TrSJ5LEGlhdRcfCRPHg/viewform" target="_blank" className="nav-link">Zgłoś się</a>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

                <Outlet />

            </Navbar>
        </div>
    );
}

export default Layout;