import '../assets/css/NotFound.css'
import { NavLink } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="notFound-container">
            <div className="title">404!</div>
            <p>Trang này không tồn tại</p>
            <NavLink to='/'>Đi tới trang chủ</NavLink>
        </div>
    )
}

export default NotFound