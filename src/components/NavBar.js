import { Container, Nav, Navbar } from "react-bootstrap/";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{padding:25, fontSize:20}}> 
        <Container>
          <Navbar.Brand href={"/"}>ToDOList</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href={"/"}>Home</Nav.Link>
              <Nav.Link href={"/task"}>Create To DO List</Nav.Link>
              <Nav.Link href={"/template"}>Templates</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
