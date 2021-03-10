import { Link} from 'react-router-dom'

import './styles.css'

export default function UserCard({user}) {

    return (
        <div key={user.id} className='userCard'>
            <h4 id='userName'>{user.name}</h4>
            <Link to={`/details/${user.name}`} id="userDetailsLink">
                <div id="userDetailsbtn">+</div>
            </Link>
        </div>
    )
}
