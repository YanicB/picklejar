import MainPage from './pages/MainPage'
import Create from './pages/Create'
import About from './pages/About'
import NavBar from './components/NavBar'
import { Routes, Route, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <section>
                <NavBar />
            </section>
            <Outlet />
        </div>
    )
}

function App() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <>
                            <section
                                id="home"
                                className="w-full min-h-screen flex justify-center items-center"
                            >
                                <MainPage />
                            </section>
                            <section>
                                <About />
                            </section>
                        </>
                    }
                />
                <Route path="/create" element={<Create />} />
            </Route>
        </Routes>
    )
}

export default App
