import { Link } from 'react-router-dom'

import './styles.css'

export default function Header() {
    return (
        <div className='nav'>
            <input type='checkbox'/>
            <div className='menu'>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/form'>Form</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
            </div>
        </div>
    )
}
