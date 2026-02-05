import MainPage from './pages/MainPage'
import CreatePoll from './pages/CreatePoll'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import How from './pages/How'
import PollsPage from './pages/PollsPage'
import { Routes, Route, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F6F1]">
            <header>
                <NavBar />
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
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
                <Route path="/create" element={<CreatePoll />} />
                <Route path="/poll/:slug" element={<PollsPage />} />
            </Route>
        </Routes>
    )
}

export default App
