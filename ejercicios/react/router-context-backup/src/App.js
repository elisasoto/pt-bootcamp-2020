import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Store } from './store'

import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Form from './pages/form/Form'
import Details from './pages/details/Details'
import List from './pages/list/List'
import Home from './pages/home/Home'

function App() {
  const [userList, setUserList] = useState([])

  function handleSubmitForm(data, cb) {
    const richData = {
        ...data,
        id: uuidv4()
    }
    setUserList(prevState=> [...prevState, richData])
    cb && cb()
    alert("tu usuario fue creado exitosamente, revisa la lista de usuarios")
}

  return (
    <section>
      <Header/>
      <Store.Provider value={{ userList, handleSubmitForm }}>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/form">
            <Form/>
          </Route>
          <Route exact path="/details/:name">
            <Details/>
          </Route>
        
          <Route exact path="/list">
            <List/>
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Store.Provider>
      <Footer/>
    </section>
  );
}

export default App;
