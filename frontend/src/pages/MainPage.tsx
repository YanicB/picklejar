import { useState } from 'react'
import { newPoll } from '../services/polls'

const MainPage = () => {
    const [title, setTitle] = useState('');

    const createPoll = async (event: any) => {
        event.preventDefault();
        const res = await newPoll(title);
    }

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    }
    return (
        <div>
            <h1 className="font-bold">PickleJar</h1>
            <form onSubmit={createPoll}>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="enter title"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MainPage
