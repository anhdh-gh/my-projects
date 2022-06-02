import { Icon } from './index'

const Footer = (props) => {
    return <div className="
                    border-bottom border-4 border-danger
                    d-flex flex-column align-items-center justify-content-around 
                    p-2 py-4"
                style={{backgroundColor: "#d2e6f0"}}
            >
        <Icon/>

        <p className="fw-bold text-center m-0 mt-2">
            ©{new Date().getFullYear()}. ALL RIGHTS RESERVED. | Design by <a target="_blank" rel="noreferrer" className="text-danger text-decoration-none" href="https://www.facebook.com/anhdh.fb">
                Đỗ Hùng Anh
            </a>
        </p>

    </div>
}

export default Footer