import { Link } from "react-router-dom"

const Header = () => {

    const linkStyle = "text-zinc-100 uppercase text-xs font-medium tracking-widest before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-100 before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative"

    return (
        <header className="w-full flex items-center justify-around py-6 bg-pink-900 text-white">
            <div className="flex items-center gap-2">
                <img src="/Logo/logo.svg" alt="header logo" className="w-10"/>
                <h2 className="text-lg font-semibold">To-do App with Redux</h2>
            </div>
            <nav>
                <ul className="flex items-center gap-12 text-lg">
                    <li><Link to="/" className={linkStyle}>Your Todos</Link></li>
                    <li><Link to="todo" className={linkStyle}>Add Todo</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header