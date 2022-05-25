import logo from '../images/logo.svg'


export default function Navbar() {
    return (
        <nav>
            <div className='container'>
                <img src={logo} alt="logo"/>
                <a href='www.youtube.com'>React Course - Project 1</a>
            </div>
        </nav>
    )
}