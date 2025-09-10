import Jar from '../components/Jar'
import SubmitIdea from '../components/SubmitIdea'
import NavBar from '../components/NavBar'

const MainPage = () => {
    return (
        <div className="h-screen w-screen bg-green-100 flex justify-center items-center flex-col gap-5">
            <NavBar />
            <Jar />
            <SubmitIdea />
        </div>
    )
}

export default MainPage
