import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome, Projects, NotFound } from '../pages'
import { ROUTE_PATH } from '../constants'

const AppNavigator = (props) => {
    return <BrowserRouter>
        {props?.children}
        <Routes>
            <Route path={ROUTE_PATH.WELCOME} element={<Welcome/>} />
            <Route path={ROUTE_PATH.PROJECTS} element={<Projects/>} />
            <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
}

export default AppNavigator