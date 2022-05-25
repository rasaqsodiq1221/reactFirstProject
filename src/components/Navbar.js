import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo"/>
            <a href='#'>React Course - Project 1</a>
        </nav>
    )
}