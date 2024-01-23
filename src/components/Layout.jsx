import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Home/Header/Header'
import Footer from './Home/Footer/Footer'

import ProductViewModal from './Product/ProductViewModal'

import AppRoutes from '../routes/AppRoutes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <AppRoutes/>
                        </div>
                    </div>
                    <Footer/>
                    <ProductViewModal/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout