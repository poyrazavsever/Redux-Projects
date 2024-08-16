import { Link } from "react-router-dom"

const Header = () => {

    const linkStyle = "text-zinc-100 uppercase text-xs font-medium tracking-widest before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-100 before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:text-zinc-300 hover:before:origin-left hover:before:scale-x-100 relative"

    return (
        <header className="w-full flex items-center justify-around py-6 bg-zinc-800 text-white">
            <h1 className="text-xl font-bold tracking-widest cursor-default">Crud Examples</h1>
            <nav>
                <ul className="flex items-center gap-12 text-lg">
                    <li><Link to="/" className={linkStyle}>Home</Link></li>
                    <li><Link to="post" className={linkStyle}>Post</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header