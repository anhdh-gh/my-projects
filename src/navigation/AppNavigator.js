import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome, Projects, Contact, NotFound } from '../pages'
import { ROUTE_PATH } from '../constants'
import { ScrollToTop } from '../components'

const AppNavigator = (props) => {
    return <BrowserRouter>
        {props?.children}
        <ScrollToTop/>
        <Routes>
            <Route path={ROUTE_PATH.WELCOME} element={<Welcome/>} />
            <Route path={ROUTE_PATH.PROJECTS} element={<Projects/>} />
            <Route path={ROUTE_PATH.CONTACT} element={<Contact/>} />
            <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
}

export default AppNavigator