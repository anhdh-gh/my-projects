import { Container, Row, Col } from 'react-bootstrap'
import avata from '../assets/img/avata.jpg'
import { useNavigate } from "react-router"
import { ROUTE_PATH } from '../constants'

const Welcome = (props) => {

    const navigate = useNavigate()

    return <div style={{ backgroundColor: "#f1f5f8", minHeight: "100vh"}} className="py-5">
        <Container fluid="lg">
            <Row>
                <Col md={4} sm={5}>
                    <div style={{ background: "rgb(232, 232, 232)", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} className="rounded-3 zoom-in h-100 d-flex justify-content-between flex-column">
                        <div className='d-flex justify-content-center flex-column align-items-center' style={{ letterSpacing: "3px" }}>
                            <img className="rounded-circle border border-success my-5" src={avata} alt="avata" style={{ width: "198px", height: "198px" }} />
                            <h3 className="fs-1 text-capitalize fw-bold">Đỗ Hùng</h3>
                            <h3 className="fs-1 text-capitalize fw-bold">Anh</h3>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <div className="w-25 bg-dark" style={{ height: "1.5px" }}></div>
                        </div>

                        <div className='d-flex justify-content-center flex-column align-items-center mt-3 mb-5 text-muted' style={{ letterSpacing: "3px" }}>
                            <h3 className="m-0">Web</h3>
                            <h3 className="m-0">Developer</h3>
                        </div>
                    </div>
                </Col>

                <Col md={8} sm={7} className="mt-sm-0 mt-5">
                    <div className='d-none d-md-block h-100'>
                        <div className="rounded-3 zoom-in d-flex justify-content-between flex-column bg-white h-100 py-5 px-5" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <h1 style={{ fontSize: "90px" }} className="fw-bold mb-4 m-lg-0">Welcome!</h1>
                            <p className="fs-5 mb-4 m-lg-0">This is the information page about <span className="fst-italic fw-bold">Hùng Anh</span>, glad you visited!</p>

                            <div className='mb-4 m-lg-0'>
                                <div style={{ cursor: "pointer" }} className='button button-dark  py-1 px-4 rounded-pill border border-dark me-4' onClick={() => navigate(ROUTE_PATH.CONTACT)}>CONTACT </div>
                                <div style={{ cursor: "pointer" }} className='button button-light py-1 px-4 rounded-pill border border-dark' onClick={() => navigate(ROUTE_PATH.PROJECTS)}>PROJECTS</div>
                            </div>

                            <p className="fw-normal fs-5 fst-italic mb-4 m-lg-0">This Website is exactly an Advertisement!</p>

                            <p className="mb-4 m-lg-0 fs-5">
                                You know, Ads are usually easy to 'Skip' but if you watch them all, maybe you will find a satisfactory product. Hope you will find what you are looking for here.
                            </p>

                            <p className="mb-4 m-lg-0 fs-5">Have a nice day!</p>
                        </div>
                    </div>

                    <div className='d-md-none d-block h-100'>
                        <div className="rounded-3 zoom-in d-flex justify-content-between flex-column bg-white h-100 py-4 px-4" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <h1 style={{ fontSize: "45px" }} className="fw-bold m-md-0 mb-4 text-center">Welcome!</h1>
                            <p className="fs-5 m-md-0 mb-4">This is the information page about <span className="fst-italic fw-bold">Hùng Anh</span>, glad you visited!</p>

                            <div className='d-flex justify-content-between m-md-0 mb-4'>
                                <div style={{ cursor: "pointer" }} className='button button-dark py-1 px-3 px-sm-4 rounded-pill border border-dark' onClick={() => navigate(ROUTE_PATH.CONTACT)}>CONTACT</div>
                                <div style={{ cursor: "pointer" }} className='button button-light py-1 px-3 px-sm-4 rounded-pill border border-dark' onClick={() => navigate(ROUTE_PATH.PROJECTS)}>PROJECTS</div>
                            </div>

                            <p className="fw-normal fs-5 fst-italic m-md-0 mb-4">This Website is exactly an Advertisement!</p>

                            <p className="m-md-0 mb-4 fs-5">
                                You know, Ads are usually easy to 'Skip' but if you watch them all, maybe you will find a satisfactory product. Hope you will find what you are looking for here.
                            </p>

                            <p className="m-md-0 mb-4 fs-5">Have a nice day!</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    </div>
}

export default Welcome