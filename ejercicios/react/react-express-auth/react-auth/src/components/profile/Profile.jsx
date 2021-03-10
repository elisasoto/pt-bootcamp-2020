import { UserContext } from '../../store';
import {useContext, } from 'react';


export default function Profile (){
    const {user, logout } = useContext(UserContext)

    console.log(user, logout)
   

    return (
    <>
    <h1>Bienvenid@ a mi App! {user.username}</h1>
    <button type='Submit' onClick={logout}>Log me out</button>
    </>
    )
}