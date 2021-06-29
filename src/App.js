import { BrowserRouter as Router,
  Switch, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const Home = () => <h3>H</h3>
const Users = () => <h3>U</h3>
const Notes = ({ notes }) => {
  return (
      <ul>
        { notes.map(note => 
            <li key={note.id}>
              <Link to={`/notes/${note.id}`}>{note.content}</Link>
            </li>
          )
        }
      </ul>
      )
}
const notes = [
  { content: 'C1', id: 1},  
  { content: 'C2', id: 2},
  { content: 'C3', id: 3}
]
const Note = ({ notes }) => {
   const id = useParams().id;
   const note = notes.find(n => n.id === Number(id))
  return (
      <h3>{ note.content }</h3>
      )  
}
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
          <Route path='/notes/:id'><Note notes={notes} /></Route>
          <Route path='/users'><Users /></Route>
          <Route path='/notes'><Notes notes={notes} /></Route>
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
