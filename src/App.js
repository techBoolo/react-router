import { BrowserRouter as Router,
  Switch, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => <h3>H</h3>
const Users = () => <h3>U</h3>
const Notes = () => <h3>N</h3>
function App() {
  const padding = { padding: 5 }
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/'  style={padding}>H</Link>
          <Link to='/notes'  style={padding}>N</Link>
          <Link to='/users' style={padding}>U</Link>
        </div>
        <Switch>
          <Route path='/users'><Users /></Route>
          <Route path='/notes'><Notes /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
        <div>
          <p>Notes app, Dep. of CS, 2021</p>
        </div>
        <div>
          <Link to='/'  style={padding}>H</Link>
          <Link to='/notes'  style={padding}>N</Link>
          <Link to='/users' style={padding}>U</Link>
          <Link to='/more' style={padding}>M</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
