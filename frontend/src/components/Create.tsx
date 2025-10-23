import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { newPoll } from '../services/polls'
    ;
const Create = () => {
    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const data = await newPoll(title.trim())
            const { poll, manageToken } = data

            localStorage.setItem(`poll_${poll.slug}_token`, manageToken)
            navigate(`/poll/${poll.slug}`)
        } catch (err: any) {
            setError(err.response?.data?.error || "Failed to create poll. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="text-center shadow-xl wx-auto max-w-4xl rounded-xl border border-green-100 w-full px-4 sm:p-6 lg:8 py-8">
            <div className="space-y-2 mb-6">
                <h1 className="text-3xl text-gray-800 font-bold">Create Your Jar</h1>
                <p className="text-gray-600">Give your jar a title to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                    </label>
                    <input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outine-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        maxLength={100}
                        required
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !title.trim()}
                        className="w-full bg-primary hover:bg-primary-hover  font-semibold px-6 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Creating..." : "Create Jar"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Create;
