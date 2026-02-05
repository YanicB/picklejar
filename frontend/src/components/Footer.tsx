import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-gray-600">
                        <span className="font-bold text-green-600">picklejar.</span>
                        {' '}&copy; {currentYear}
                    </div>

                    <div className="flex flex-row space-x-6">
                        <Link
                            to="/about"
                            className="text-gray-600 hover:text-green-600"
                        >
                            About
                        </Link>
                        <Link
                            to="/how"
                            className="text-gray-600 hover:text-green-600"
                        >
                            How it works
                        </Link>
                        <Link
                            to="/create"
                            className="text-gray-600 hover:text-green-600"
                        >
                            Create Poll
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
