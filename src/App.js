import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <WatchList />
          </Route>
          <Route path='/watched'>
            <Watched />
          </Route>
          <Route path='/add'>
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
