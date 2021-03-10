import './index.scss'

export default function Header (){
    return (
        <div className='header-container'>
            <div className="logo-container">
                <p>SOME CONTENT</p>
            </div>
            <nav className='navbar'>
                <a href="www.google.com"> Home</a>
                <a href="www.google.com"> About</a>
                <a href="www.google.com"> Doc</a>
            </nav>
        </div>
    )
}