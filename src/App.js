import { useState } from 'react';
import { Switch, Route, Link, useHistory, Redirect, useRouteMatch } from 'react-router-dom';
import { useCounter } from './customHook';
import './App.css';

const notes = [
  { content: 'C1', id: 1},  
  { content: 'C2', id: 2},
  { content: 'C3', id: 3}
]

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

const Note = ({ note }) => {
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
  const counter = useCounter();
  const like = useCounter();
  const disLike = useCounter();

  const history = useHistory();
  const match = useRouteMatch('/notes/:id');
  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  const handleSubmit = (ev) => {
    ev.preventDefault(); 
    setUser(ev.target[0].value);
    history.push('/');
  }
  const padding = { padding: 5 }
  const margin = { margin: 5 }
  const border = { borderBottom: "2px solid #ccc" }

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
          <Route path='/notes/:id'><Note note={note} /></Route>
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
          <h4><span style={border}>C C hook</span></h4> 
          <div>{counter.value}</div>
          <button onClick={counter.increase}>Inc</button>
          <button onClick={counter.reset}>Reset</button>
          <button onClick={counter.decrease}>Dec</button>
        </div>
        <div>
          <h4>Like, Dislike</h4>
          <span style={{ color: 'green'}}>{ like.value }</span>
          <button onClick={like.increase} style={margin}>Like</button>
          <button onClick={disLike.increase} style={margin}>Dislike</button>
          <span style={{ color: 'red'}}>{ disLike.value }</span>
        </div>
        <hr />
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
