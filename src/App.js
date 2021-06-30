import { useState } from 'react';
import { Switch, Route, Link, useParams, useHistory, Redirect } from 'react-router-dom';
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
const Login = ({ handleSubmit }) => {
  return (
    <div>
      <h3>Li</h3>
      <form onSubmit={handleSubmit}>
          <div>
            Nm: <input />
          </div>
          <div>
            P: <input type='password'/>
          </div>
          <button type='submit'>Li</button>
        </form>
      </div>
    )
}

function App() {
  const [ user, setUser ] = useState(null);
  const history = useHistory();

  const handleSubmit = (ev) => {
    ev.preventDefault(); 
    setUser(ev.target[0].value);
    history.push('/');
  }
  const padding = { padding: 5 }
  return (
    <div className="App">
        <div>
          <Link to='/'  style={padding}>H</Link>
          <Link to='/notes'  style={padding}>N</Link>
          <Link to='/users' style={padding}>U</Link>
          { user
          ? <em>{ user } logged in</em>
          : <Link to='/login' style={padding}>login</Link>
          }
        </div>
        <Switch>
          <Route path='/notes/:id'><Note notes={notes} /></Route>
          <Route path='/users'>
            { user
              ? <Users />
              : <Redirect to='/login' />
            }
          </Route>
          <Route path='/notes'><Notes notes={notes} /></Route>
          <Route path='/login'><Login handleSubmit={handleSubmit}/></Route>
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
    </div>
  );
}

export default App;
