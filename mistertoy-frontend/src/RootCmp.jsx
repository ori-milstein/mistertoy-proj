import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// const Router = ReactRouterDOM.BrowserRouter
// const Router = ReactRouterDOM.HashRouter

// import './assets/style/main.scss'
import './style/main.scss'

// import { AppHeader } from './cmps/AppHeader.jsx'
// import { AppFooter } from './cmps/AppFooter.jsx'

import { HomePage } from './pages/HomePage.jsx'
// import { AboutUs } from './pages/AboutUs.jsx'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { store } from './store/store.js'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
// import { UserDetails } from './pages/UserDetails.jsx'
import { Provider } from 'react-redux'

// import './assets/style/main.css'

export function RootCmp() {

    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout app">
                    {/* <AppHeader /> */}
                    <main >
                        <Routes>
                            <Route element={<HomePage />} path="/" />
                            {/* <Route element={<AboutUs />} path="/about" /> */}
                            <Route element={<ToyIndex />} path="/toy" />
                            <Route element={<ToyEdit />} path="/toy/edit" />
                            <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
                            <Route element={<ToyDetails />} path="/toy/:toyId" />
                            {/* <Route element={<UserDetails />} path="/user/:userId" /> */}
                        </Routes>
                    </main>
                    {/* <AppFooter /> */}
                </section>
            </Router>
        </Provider >

    )
}


