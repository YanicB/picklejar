const NavBar = () => {
    return (
        <header className="flex justify-between p-5">
            <h1 className="text-2xl font-bold">
                picklejar.
            </h1>
            <div className="flex flex-row space-x-5">
                <p>create</p>
                <p>how it works</p>
                <p>sign up</p>
                <p>login</p>
            </div>
        </header>
    )
}

export default NavBar
