import { useContext } from 'react'
import { Store } from '../../store'

import UserCard from '../../components/card/userCard'

import './styles.css'

export default function List() {
    const { userList } = useContext(Store)
    return (
        <section>
            <h3> LIST OF USERS: </h3>
            <div className='userContainer'>
                {userList.map((user) => {
                     return (
                        <UserCard user={user} key={user.id}/>
                    )
                })}
            </div>

        </section>
    )
}
