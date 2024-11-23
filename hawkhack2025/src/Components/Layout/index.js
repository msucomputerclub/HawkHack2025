import React from 'react'
import './index.scss'
import {Outlet} from 'react-router-dom'
import Header from '../Header/index'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer />  */}
        </div>
    )
}

export default Layout;
