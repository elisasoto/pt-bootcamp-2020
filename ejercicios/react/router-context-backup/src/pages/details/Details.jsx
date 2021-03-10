import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../../store'

import './styles.css'

export default function Details() {
    const { name } = useParams()
    const { userList = [] } = useContext(Store)
    
    const user = userList.find(user => user.name === name)
    const { age = '', id = '', nickname = '', pet = '' } = user || {}

    return (
        <section>
            <h3> Detalles de {user.name}</h3>

            <div className="userDetails">
                <label>Tu id de Usuario: <strong>{id}</strong></label><br />
                <label>Edad: <strong>{age}</strong></label><br />
                <label>Nickname: <strong>{nickname}</strong></label><br />
                <label>Tu mascota favorita es: <strong>{pet}</strong></label><br />
            </div>
            <br /><br /><br />
        </section>
    )
}
