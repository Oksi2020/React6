import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
 
import store from '../redux/store';
import { List } from './list/list';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <h1>My project</h1>
        <NavLink to = '/list'>List</NavLink>
        <NavLink to = '/posts'> Sorted list </NavLink>
        <Switch>
          <Route exact path = '/list' component = {List}></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
