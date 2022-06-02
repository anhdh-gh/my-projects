import { Navbar, Container, Nav } from 'react-bootstrap'
import { Icon } from '../components'
import { useLocation, useNavigate } from "react-router"
import { ROUTE_PATH } from '../constants'

const Header = (props) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    return <Navbar expand="md" style={{background: "linear-gradient(315deg,#fff,#d7e1ec)"}} className="border-bottom border-4 border-danger">
        <Container fluid>
            <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => navigate(ROUTE_PATH.WELCOME)}>
                <div className='d-flex'>
                    <div className='me-3'>
                        <i className="fa-solid fa-stop"></i> 
                    </div>
                    <div className='d-sm-flex align-items-center'>
                        <div className="fw-bold">Đỗ Hùng Anh</div>
                        <div className='d-none d-sm-inline mx-2'>/</div>
                        <div className='fs-6 text-muted'>Web developer</div>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto text-center" navbarScroll>
                    <Nav.Link as="span" style={{cursor: 'pointer'}} onClick={() => navigate(ROUTE_PATH.WELCOME)} className={`${pathname === ROUTE_PATH.WELCOME ? 'text-success fw-bold' : ''}`}>Welcome!</Nav.Link>
                    <Nav.Link as="span" style={{cursor: 'pointer'}} className="">About</Nav.Link>
                    <Nav.Link as="span" style={{cursor: 'pointer'}} className="">Projects</Nav.Link>
                    <Nav.Link as="span" style={{cursor: 'pointer'}} className="">Contact</Nav.Link>
                </Nav>

                <div className='p-2 py-3 d-flex d-md-none justify-content-center'>
                    <Icon />
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Header