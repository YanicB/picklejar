import { Link } from 'react-router-dom'
const MainPage = () => {
    return (
        <section className="w-full min-h-screen flex flex-column items-center justify-center py-12 px-4">
            <div className="max-w-2xl mx-auto w-full space-y-6 flex flex-col items-center justify-center">
                <p className="text-xl font-bold">in a pickle?</p>
                <Link to="/create" className="font-bold bg-green-500 text-center px-6 py-4 rounded-xl hover:bg-green-600">
                    Get Started
                </Link>
            </div>
        </section>
    )

}

export default MainPage
