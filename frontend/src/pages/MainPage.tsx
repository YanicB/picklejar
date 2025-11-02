import { Link } from "react-router-dom";
import PickleJarSvg from "../components/PickleJarSvg";

const MainPage = () => {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4">
            <div className="relative w-[min(90vw,720px)]">
                <PickleJarSvg className="block w-full h-auto" />
                <div
                    className="absolute flex flex-col items-center justify-center text-center gap-3 pointer-events-none"
                    style={{
                        left: "23%",   // tweak these 4 numbers to fit your label
                        top: "44%",
                        width: "54%",
                        height: "32%",
                    }}
                >
                    <p className="text-xl font-bold m-0">in a pickle?</p>
                    <Link
                        to="/create"
                        className="font-bold bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 pointer-events-auto"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
