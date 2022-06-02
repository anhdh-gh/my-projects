import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Icon = (props) => {
    return <div>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/anhdh.fb" className="px-2">
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Facebook</Tooltip>}>
                <i className="fab fa-facebook h3 mb-0" />
            </OverlayTrigger>
        </a>

        <a target="_blank" rel="noreferrer" href="mailto:anhdh.cv@gmail.com" className="px-2">
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Mail</Tooltip>}>
                <i className="far fa-envelope text-danger h3 mb-0" />
            </OverlayTrigger>
        </a>

        <a target="_blank" rel="noreferrer" href="https://github.com/DoHungAnh-27-09-2000" className="px-2">
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Github</Tooltip>}>
                <i className="fab fa-github text-dark h3 mb-0" />
            </OverlayTrigger>
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCuZUp0A9aLrfHSPr3eg05Ow" className="px-2">
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Youtube</Tooltip>}>
                <i className="fab fa-youtube text-danger h3 mb-0" />
            </OverlayTrigger>
        </a>
    </div>
}

export default Icon