const NavBar = () => {
    return (
        <header className="flex justify-between p-5">
            <h1 className="text-2xl font-bold bg-green-300">
                picklejar.
            </h1>
            <div className="flex flex-row space-x-5">
                <a href="#home">home</a>
                <a href="#about">how it works</a>
            </div>
        </header>
    )
}

export default NavBar
