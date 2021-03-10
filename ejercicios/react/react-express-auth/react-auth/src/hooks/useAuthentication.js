import { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const API_URL = 'http://localhost:4000';

export default function useAuthentication() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  function login(email, password) {
    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log('Login error:', err);
      });
  }
  
  function signup(email, password, username){
    axios
      .post(`${API_URL}/auth/register`, { email, password, username })
      .then((res) => {
        console.log(res)
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log('Register error:', err);
      });
  }

  function logout() {
    setUser(null)
    history.push('/logout')
  }


  function getProfile(){
    axios
    .get(`${API_URL}/auth/profile`)
    .then((res)=>{
      setUser(res.data.data)
    })
    .catch((error)=>{
      console.log('Error retrieving profile:', error);
    })
    .finally(()=>{
      setLoading(false);
    })
  }  

  useEffect(() => {
    getProfile();
  }, []);


  return {
    user,
    login,
    logout,
    signup,
    loading,
  };
}
