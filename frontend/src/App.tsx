import MainPage from './pages/MainPage'
import NavBar from './components/NavBar'
function App() {
    return (
        <div>
            <section>
                <NavBar />
            </section>
            <section className="w-screen h-screen flex justify-center items-center">
                <MainPage />
            </section>
        </div>
    )
}

export default App
