import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4">
            <div className="flex flex-col items-center justify-center mx-auto gap-y-2">
                <p className="text-xl font-bold m-0">in a pickle?</p>
                <Link
                    to="/create"
                    className="font-bold bg-green-500 text-black px-6 py-3 rounded-xl hover:bg-green-600">
                    Get Started
                </Link>
            </div>
        </section >
    );
};

export default MainPage;
