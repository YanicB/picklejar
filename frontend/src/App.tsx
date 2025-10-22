import MainPage from './pages/MainPage'
import Create from './pages/Create'
import About from './pages/About'
import NavBar from './components/NavBar'
import How from './pages/How'
import { Routes, Route, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="overflow-hidden bg-[#F8F6F1] h-screen">
            <header>
                <NavBar />
            </header>
            <main >
                <Outlet />
            </main>
        </div>
    )
}

function App() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/how" element={<How />} />
                <Route path="/create" element={<Create />} />
            </Route>
        </Routes>
    )
}

export default App
