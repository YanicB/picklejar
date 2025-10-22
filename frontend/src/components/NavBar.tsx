import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <Link to="/">
                        <h1 className="text-2xl font-extrabold text-green-600">
                            picklejar.
                        </h1>
                    </Link>
                    <div className="flex flex-row space-x-6">
                        <Link to="/about" className="rounded-xl px-4 py-2 bg-green-500 hover:bg-green-600">
                            About
                        </Link>
                        <Link to="/how" className="rounded-xl px-4 py-2 bg-green-500 hover:bg-green-600">
                            How it works
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar
