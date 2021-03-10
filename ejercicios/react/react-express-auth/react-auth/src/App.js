import { Switch, Route, Redirect } from 'react-router-dom';

import { UserContext } from './store';
import useAuthentication from './hooks/useAuthentication';
import './App.css';

//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//import Loader from 'react-loader-spinner';



import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import Signin from './components/form/Singin'
import Logout from './components/logout/Logout'
import Signup from './components/signup/Signup';

function App() {
  const { user, login, logout, signup, loading } = useAuthentication();

  return (
    <UserContext.Provider value={{ user, login, logout, signup, loading }}>
      <div className="App">
        <Switch>
          <Route path="/profile" exact>
            {loading ?(<h4>loading...</h4>):
            <>
            {user ? (
              <Profile />
            ) : (
              <Redirect to="/login" />
            )}
            </>
            
            }
          </Route>

          <Route path="/login" exact>
            {user ? (
              <Redirect to="/profile" />
            ) : (
              <Signin/>
            )}
          </Route>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/logout" exact>
            <Logout />
          </Route>

          <Route path="/register" exact>
            <Signup />
          </Route>

        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
