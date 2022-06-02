import '../assets/css/NotFound.css'
import { NavLink } from "react-router-dom"
import { ROUTE_PATH } from '../constants'

const NotFound = () => {
    return (
        <div className="notFound-container" style={{ backgroundColor: "#f1f5f8" }}>
            <div className="title fw-bold text-dark">404!</div>
            <p className='fw-bold text-dark'>Trang này không tồn tại</p>
            <NavLink to={ROUTE_PATH.WELCOME}>Đi tới trang chủ</NavLink>
        </div>
    )
}

export default NotFound