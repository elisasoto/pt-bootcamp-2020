import { Link } from 'react-router-dom'
import './styles.css'

export default function Header({ text }) {
    return (
        <div className='menu'>
            <h1>{text}</h1>
            <nav className='nav'>
                <h6>menu</h6>
                <Link id='home' to='/home'>Home</Link>
                <Link id='create' to='/create'>Create Pokemon</Link>
            </nav>
        </div>
    )
}
