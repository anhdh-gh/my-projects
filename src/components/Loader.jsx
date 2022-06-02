import '../assets/css/Loader.css'

const Loader = (props) => {

    return <div className="loader-container">
        <div className="main">
            <h1 className="title">My projects</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
}

export default Loader