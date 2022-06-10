import { Project, SearchBox } from '../components'
import { useState } from "react"

const data = [
    {
        id: 1,
        title: 'Tư vấn và chẩn đoán bệnh xương khớp',
        subTitle: 'Ends at Jun 10, 2022',
        descriptions: [
            `This is a website for diagnosis and treatment of diseases related to bones and joints. The two main algorithms used in the project are Case-based reasoning (CBR) and Rule-based reasoning (RBR).`
        ],
        languages: ['Spring', 'MySQL', 'Firebase', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Heroku', 'Jquery'],
        sourceCode: "https://github.com/anhdh-gh/Diagnosis-and-consultation-of-musculoskeletal-diseases",
        viewDemo: "https://musculoskeletal-diseases.herokuapp.com",
    },
    {
        id: 2,
        title: 'Learn EV',
        subTitle: 'Ends at Feb 23, 2022',
        descriptions: [
            `"Learn EV" is my most passionate project. Starting from the need to learn English vocabulary, I decided to create this website with the purpose of allowing everyone to create new word topics to learn and practice. In addition, the website also integrates the function of pronunciation as well as transcription of words. Please try the experience!`
        ],
        languages: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Firebase', 'Bootstrap', 'Heroku', 'Vercel'],
        sourceCode: "https://github.com/anhdh-gh/learn-e-v",
        viewDemo: "https://learn-e-v.vercel.app",
    },
    {
        id: 3,
        title: 'My scoreboard',
        subTitle: 'Ends at Oct 17, 2021',
        descriptions: [
            `"My scoreboard" was a project to manage my grades when I was studying at PTIT. With this project, I can compile the scores of my subjects and my final GPA, so that I can make reasonable decisions to improve the scores of the subjects.`,
        ],
        languages: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'Firebase', 'Heroku', 'Vercel'],
        sourceCode: "https://github.com/anhdh-gh/my-scoreboard",
        viewDemo: "https://my-scoreboard.vercel.app",
    },
    {
        id: 4,
        title: 'Chat and game online',
        subTitle: 'Ends at Jun 10, 2022',
        descriptions: [
            `"Chat and game online" is a desktop application for chatting and playing games together. The application uses Java technologies such as Java Swing, Java Socket, Java Multi Thread, Spring Data JPA.`
        ],
        languages: ['Spring', 'Java', 'MySQL'],
        sourceCode: "https://github.com/anhdh-gh/Chat-and-game-online",
        viewDemo: 'https://github.com/anhdh-gh/Chat-and-game-online/blob/main/README.md#h%C3%ACnh-%E1%BA%A3nh-preview',
        jframeSrc: "https://user-images.githubusercontent.com/79781308/173025699-aef2c279-f511-4624-ab45-daf080fc67ec.png"
    },
    {
        id: 5,
        title: 'My projects',
        subTitle: 'Ends at Jun 4, 2022',
        descriptions: [
            `"My projects" is a website introducing myself and the projects that I have done from the past to the present. The projects in this website are all really important to me, they are milestones in the self-study process. You will find many interesting things about me here`
        ],
        languages: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Vercel'],
        sourceCode: "https://github.com/anhdh-gh/my-projects",
        viewDemo: "https://my-projects-anhdh.vercel.app",
    },
    {
        id: 6,
        title: 'Calculator online',
        subTitle: 'Ends at Oct 17, 2021',
        descriptions: [
            `"Calculator online" is a pocket calculator simulation website. This is a small project built during self-taught ReactJS Framework. It's small, but it really means a lot to me.`,
        ],
        languages: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Vercel', 'Heroku'],
        sourceCode: "https://github.com/anhdh-gh/calculator",
        viewDemo: "https://calculator-gamma-livid.vercel.app",
    },
    {
        id: 7,
        title: "The band",
        subTitle: 'Ends at Oct 17, 2021',
        descriptions: [
            '"The band" is my first website. I made this website while taking the course "HTML, CSS from Zero to Hero" at <a target="_blank" rel="noreferrer" href="https://fullstack.edu.vn">F8</a>. Although this project is simple, it helps me summarize the results of the self-study process.',
        ],
        languages: ['HTML', 'CSS', 'JavaScript'],
        sourceCode: "https://github.com/anhdh-gh/The-band",
        viewDemo: "https://the-band-anhdh.vercel.app",
    },
    {
        id: 8,
        title: "Bank employee management",
        subTitle: 'Ends at Jun 10, 2022',
        descriptions: [
            `"Bank employee management" is a bank employee management system. The system is developed by technologies such as Spring boot, Spring Data JPA, MySQL, HTML, CSS, JS, Jquery, Bootstrap 5.`
        ],
        languages: ['Spring', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Jquery', 'Bootstrap'],
        sourceCode: "https://github.com/anhdh-gh/Bank-employee-management-system",
        jframeSrc: "https://images.moneycontrol.com/static-mcnews/2021/06/Bank-representational-shutterstock.jpg?impolicy=website&width=770&height=431",
    },
    {
        id: 9,
        title: "Clocks and alarms",
        subTitle: 'Ends at Jun 10, 2022',
        descriptions: [
            `"Clocks and alarms" is a desktop application that has the function of viewing the time of some countries in the world and setting alarms. The application is developed based on JavaFX.`
        ],
        languages: ['JavaFX'],
        sourceCode: "https://github.com/anhdh-gh/Clocks-and-alarms",
        viewDemo: 'https://github.com/anhdh-gh/Clocks-and-alarms/blob/master/README.md#h%C3%ACnh-%E1%BA%A3nh-preview',
        jframeSrc: "https://user-images.githubusercontent.com/79781308/173048493-0619a567-ebca-4ff5-9385-54f7fd3657aa.png",
    },
    {
        id: 10,
        title: "Change jpg image properties for seo shopee",
        subTitle: 'Ends at Jun 10, 2022',
        descriptions: [
            `"Change jpg image properties for seo shopee" is a desktop application used to adjust the properties of images so that shopee seo standards. Technologies used include Java Swing, Java Multi Thread, FIle IO.`
        ],
        languages: ['Java'],
        sourceCode: "https://github.com/anhdh-gh/Change_jpg_image_properties_for_seo_shopee",
        viewDemo: 'https://github.com/anhdh-gh/Change_jpg_image_properties_for_seo_shopee/blob/main/README.md#h%C3%ACnh-%E1%BA%A3nh-preview',
        jframeSrc: "https://user-images.githubusercontent.com/79781308/173051517-fb73d846-d44e-4c91-87c6-8aa2fceb664e.png",
    },
    {
        id: 11,
        title: "Basic Entity Generation Algorithms",
        subTitle: 'Ends at Jun 10, 2022',
        descriptions: [
            `"Basic Entity Generation Algorithms" is a desktop application that illustrates basic entity generation algorithms. The application is written in Java 2D, Java Swing.`
        ],
        languages: ['Java'],
        sourceCode: "https://github.com/anhdh-gh/Basic-Entity-Generation-Algorithms",
        viewDemo: 'https://github.com/anhdh-gh/Basic-Entity-Generation-Algorithms/blob/main/readme.md#h%C3%ACnh-%E1%BA%A3nh-preview',
        jframeSrc: "https://user-images.githubusercontent.com/79781308/173058965-422d0838-4283-4fbb-870f-12b1624d039e.png",
    },
]

const Projects = (props) => {

    const [search, setSearch] = useState('')
    const dataShow = search.trim() === '' ? data : data.filter(item => item.languages.map(language => language.trim().toLowerCase()).some(language => search.trim().toLowerCase().includes(language)))

    return <div style={{ backgroundColor: "#f1f5f8", minHeight: '100vh'}} className="py-5">

        <div className="container-fluid">
            <div className="d-flex align-items-center flex-column mb-5">
                <h1 className="fw-bold lh-base">Projects</h1>
                <div className="rounded-pill mb-4" style={{ width: '8rem', height: '0.2rem', backgroundColor: '#d30000' }}></div>
            </div>

            <div className="text-center fst-italic mb-5">
                <p className="fs-5">I don't know if that's right, some of these aren't exactly 'Projects'. On this page you will find things I have seriously worked on.</p>
                <p className="fw-bold fs-6">Updating......</p>
            </div>

            <div className='d-flex justify-content-center'>
                <SearchBox
                    inputColor = "#f1f5f8"
                    className="my-3"
                    placeholder="Search technical"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                {dataShow?.map((project, index) =>
                    <Project className="mt-5" key={project.id} project={project} >
                        {   index !== dataShow.length - 1 && 
                            <div className="d-flex justify-content-center mt-5 mt-md-0 d-md-none">
                                <div className="border-bottom border-2 border-danger w-100" style={{ height: "1px" }}></div>
                            </div>    
                        }                    
                    </Project>
                )}
            </div>
        </div>
    </div>
}

export default Projects