import ReactHtmlParser from 'react-html-parser'

const Project = (props) => {

    const { className, style, project, children } = props

    return <div className={className} style={style}>
        <div className="container-lg">
            <div className="row">
                <div className="col-md-6">

                    <div className='zoom-in rounded-3 h-100 bg-white py-5 d-flex flex-column justify-content-between pe-4' style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                        <div className='ps-4 border-dark border-start border-5'>
                            <div className='fs-4 fw-bold'>{project.title}</div>
                            <div>{ReactHtmlParser(project.subTitle)}</div>
                        </div>

                        <div className='ps-4 mt-4'>
                            {project?.descriptions.map((description, index) => <p style={{textAlign: "justify"}} key={`${project.id}-${index}`} className="">
                                {ReactHtmlParser(description)}
                            </p>)}
                        </div>

                        <div className='d-flex flex-wrap ps-4 justify-content-around align-items-center mt-3'>
                            {project?.languages.sort((language1, language2) => language1.length - language2.length).map((language, index) => <h4 key={`${project.id}-${index}`}><span className={`badge bg-light text-dark`}>
                                <i className={`${
                                    language === 'HTML' ? 'fa-brands fa-html5 text-warning'
                                    : language === 'CSS' ? 'fa-brands fa-css3-alt text-primary'
                                    : language === 'JavaScript' ? 'fa-brands fa-js text-warning'
                                    : language === 'ReactJS' ? 'fa-brands fa-react text-info'
                                    : language === 'Java' ? 'fa-brands fa-java text-danger'
                                    : language === 'JavaFX' ? 'fa-solid fa-screwdriver-wrench text-danger'
                                    : language === 'Bootstrap' ? 'fa-brands fa-bootstrap text-primary'
                                    : language === 'MySQL' ? 'fa-solid fa-database text-info'
                                    : language === 'Firebase' ? 'fa-solid fa-server text-warning'
                                    : language === 'Heroku' ? 'fa-solid fa-rocket text-danger'
                                    : language === 'Vercel' ? 'fa-solid fa-square-caret-up text-black'
                                    : language === 'Jquery' ? 'fa-brands fa-shopware text-primary'
                                    : language === 'Spring' ? 'fa-solid fa-leaf text-success'
                                    : language === 'Spring Boot' ? 'fa-solid fa-leaf text-success'
                                    : language === 'JSP' ? 'fa-brands fa-java text-danger'
                                    : language === 'Servlet' ? 'fa-brands fa-java text-danger'
                                    : language === 'Tomcat' ? 'fa-solid fa-cat text-warning'
                                    : language === 'SOAP' ? 'fa-solid fa-file-code'
                                    : language === 'Java Swing' ? 'fa-brands fa-java text-danger'
                                    : language === 'Spring Data JPA' ? 'fa-solid fa-database text-success'
                                    : language === 'Visual Paradigm' ? 'fa-solid fa-layer-group text-danger'
                                    : language === 'Python' ? 'fa-brands fa-python text-info'
                                    : language === 'Django' ? 'fa-brands fa-python text-success'
                                    : ''
                                }`}></i> {language}
                            </span></h4>)}
                        </div>

                        <div className='d-flex flex-wrap ps-4 justify-content-around align-items-center mt-3'>
                            <div className='button button-dark  py-1 px-3 px-sm-4 rounded-pill border border-dark'>
                                <a target="_blank" rel="noreferrer" href={project.sourceCode} className="text-reset text-decoration-none">
                                    <span className="d-sm-block d-none">Source code</span>
                                    <span className="d-sm-none d-block">Code</span>
                                </a>
                            </div>
                            <div className='button button-light py-1 px-3 px-sm-4 rounded-pill border border-dark'>
                                <a target="_blank" rel="noreferrer" href={project?.viewDemo ? project?.viewDemo : project.sourceCode} className="text-reset text-decoration-none">
                                    <span className="d-sm-block d-none">View demo</span>
                                    <span className="d-sm-none d-block">Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-md-0 mt-3">
                    <div className="zoom-in rounded-3 overflow-hidden w-100 h-100" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", minHeight: "300px"}}>
                        <iframe src={project?.jframeSrc ? project?.jframeSrc : project?.viewDemo} name={project.title} title={project.title} className="w-100 h-100"/>
                    </div>
                </div>
            </div>

            {children}
        </div>
    </div>
}

export default Project