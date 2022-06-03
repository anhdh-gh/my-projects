import emailjs from 'emailjs-com'
import { Container, Row, Col } from 'react-bootstrap'
import avata from '../assets/img/avata.jpg'
import CV from '../assets/file/CV_ANH-DO_WEB DEVELOPER.pdf'
import { Notify } from '../util'
import { useState } from 'react'

const Contact = (props) => {

    const [ sending, setSending ] = useState(false)

    function sendEmail(e) {
        e.preventDefault()

        const id = Notify.loading('Sending...!')
        setSending(true)

        emailjs.sendForm('service_rzxt165', 'template_so2agqh', e.target, 'FKNmRaxqesgijaaIl')
            .then((res) => {
                Notify.update(id, 'Sent successfully!', 'success', false)
            }, (err) => {
                Notify.update(id, 'Send failed!', 'error', false)
            }).finally(() => {
                setSending(false)
            })
    }

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

                        <div className='d-md-block d-none'>
                            <div className='d-flex justify-content-center flex-column align-items-center mt-3 mb-5 text-muted'>
                                <h5 className="fs-5 text-dark"><i className="fa-solid fa-location-dot"></i> Hà Nội</h5>
                                <h5 className="fs-5 text-dark">
                                    <a rel="noreferrer" href="tel:0962507172" className="text-dark">
                                        <i className="fa-solid fa-square-phone"></i> 0962 507 172
                                    </a>
                                </h5>

                                <h5 className="fs-5 text-dark">
                                    <a rel="noreferrer" href="mailto:anhdh.cv@gmail.com" className="text-dark">
                                        <i className="fa-solid fa-envelope"></i> anhdh.cv@gmail.com
                                    </a>
                                </h5>
                            </div>
                        </div>

                        <div className='d-md-none d-block'>
                            <div className='d-flex justify-content-center flex-column align-items-center mt-3 mb-5 text-muted'>
                                <h5 className="fs-6 text-dark"><i className="fa-solid fa-location-dot"></i> Hà Nội</h5>
                                <h5 className="fs-6 text-dark">
                                    <a rel="noreferrer" href="tel:0962507172" className="text-dark">
                                        <i className="fa-solid fa-square-phone"></i> 0962 507 172
                                    </a>
                                </h5>

                                <h5 className="fs-6 text-dark">
                                    <a rel="noreferrer" href="mailto:anhdh.cv@gmail.com" className="text-dark">
                                        <i className="fa-solid fa-envelope"></i> anhdh.cv@gmail.com
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={8} sm={7} className="mt-sm-0 mt-5">
                    <div className='d-none d-md-block h-100'>
                        <div className="rounded-3 zoom-in d-flex justify-content-between flex-column bg-white h-100 py-5 px-5" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <h1 style={{ fontSize: "90px" }} className="fw-bold mb-4">Contact!</h1>

                            <form autoComplete="off" id="contact-form" onSubmit={sendEmail}>

                                <div className="mb-3">
                                    <label htmlFor="from_name" className="form-label fw-bold">From name:</label>
                                    <input autoComplete="off" type="text" className="form-control" id="from_name" name="from_name" placeholder="Name..." />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="from_email" className="form-label fw-bold">From email:</label>
                                    <input autoComplete="off" type="email" className="form-control" id="from_email" name="from_email" placeholder="name@example.com" required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email_subject" className="form-label fw-bold">Subject:</label>
                                    <input autoComplete="off" type="text" className="form-control" id="email_subject" name="email_subject" placeholder="Subject..." required/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label fw-bold">Message:</label>
                                    <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <a style={{ cursor: "pointer" }} className='button button-light py-1 px-3 px-sm-4 rounded-3 border border-dark' href={CV} download='CV_ANH DO_WEB DEVELOPER.pdf'>CV</a>
                                    <button disabled={sending} type='submit' style={{ cursor: "pointer" }} className='button button-dark py-1 px-3 px-sm-4 rounded-3 border border-dark'>SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='d-md-none d-block h-100'>
                        <div className="rounded-3 zoom-in d-flex justify-content-between flex-column bg-white h-100 py-4 px-4" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            
                            <h1 style={{ fontSize: "45px" }} className="fw-bold m-md-0 mb-4 text-center">Contact!</h1>                         

                            <form autoComplete="off" id="contact-form" onSubmit={sendEmail}>

                                <div className="mb-3">
                                    <label htmlFor="from_name" className="form-label fw-bold">From name:</label>
                                    <input autoComplete="off" type="text" className="form-control" id="from_name" name="from_name" placeholder="Name..." />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="from_email" className="form-label fw-bold">From email:</label>
                                    <input autoComplete="off" type="email" className="form-control" id="from_email" name="from_email" placeholder="name@example.com" required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email_subject" className="form-label fw-bold">Subject:</label>
                                    <input autoComplete="off" type="text" className="form-control" id="email_subject" name="email_subject" placeholder="Subject..." required/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label fw-bold">Message:</label>
                                    <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <a style={{ cursor: "pointer" }} className='button button-light py-1 px-3 px-sm-4 rounded-3 border border-dark' href={CV} download='CV_ANH DO_WEB DEVELOPER.pdf'>CV</a>
                                    <button disabled={sending} type='submit' style={{ cursor: "pointer" }} className='button button-dark py-1 px-3 px-sm-4 rounded-3 border border-dark'>SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Contact