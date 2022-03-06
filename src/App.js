
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostDetail from './components/PostDetail';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import CreatePost from './components/CreatePost';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/details"><PostDetail /></Route>
          <Route exact path="/create"><CreatePost/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
