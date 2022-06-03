import { Navbar, Container, Nav } from 'react-bootstrap'
import { Icon } from '../components'
import { useLocation, useNavigate } from "react-router"
import { ROUTE_PATH } from '../constants'

const Header = (props) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    return <><Navbar style={{ background: "linear-gradient(315deg,#fff,#d7e1ec)" }} className="border-bottom border-3 border-danger p-3">
        <Container fluid>
            <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTE_PATH.WELCOME)}>
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
                <div className='ms-auto'>
                    <Icon className="d-flex flex-wrap justify-content-end" />
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    <Navbar expand="sm" style={{ backgroundColor: "#d2e6f0"}}>
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll" className="text-uppercase">
                <Nav className="mx-auto text-center" navbarScroll>
                    <Nav.Link as="span" style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTE_PATH.WELCOME)} className={`px-sm-4 fw-bold ${pathname === ROUTE_PATH.WELCOME ? 'active-success' : ''}`}>Welcome!</Nav.Link>
                    <Nav.Link as="span" style={{ cursor: 'pointer' }} className="px-sm-4 fw-bold">About</Nav.Link>
                    <Nav.Link as="span" style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTE_PATH.PROJECTS)} className={`px-sm-4 fw-bold ${pathname === ROUTE_PATH.PROJECTS ? 'active-success' : ''}`}>Projects</Nav.Link>
                    <Nav.Link as="span" style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTE_PATH.CONTACT)} className={`px-sm-4 fw-bold ${pathname === ROUTE_PATH.CONTACT ? 'active-success' : ''}`}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
}

export default Header