import { useState } from 'react';
import { Switch, Route, Link, useHistory, Redirect, useRouteMatch } from 'react-router-dom';
import { useCounter, useField } from './customHook';
import styled from 'styled-components';

import './App.css';

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
`
const Input = styled.input`
  margin: 0.25em;
`
const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`
const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`
const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`
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
            Nm: <Input />
          </div>
          <div>
            P: <Input type='password'/>
          </div>
          <Button type='submit'>Li</Button>
        </form>
      </div>
    )
}

function App() {
  const [ user, setUser ] = useState(null);
  const [ name, setName ] = useState('');
  const bdate = useField('date');
  const height = useField('number');

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
    <Page>
        <Navigation>
          <Link to='/'  style={padding}>H</Link>
          <Link to='/notes'  style={padding}>N</Link>
          <Link to='/users' style={padding}>U</Link>
          { user
          ? <em>{ user } logged in</em>
          : <Link to='/login' style={padding}>login</Link>
          }
        </Navigation>
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
          <h4><span style={border}>Form</span></h4>
          <form>
              Nm: <input type='text' value={name} onChange={(ev) => setName(ev.target.value)} />  
              <br />
              Bd: <input type={bdate.type} value={bdate.value} onChange={bdate.onChange} />  
              <br />
              Hg: <input { ...height } />
          </form>
        </div>
        <div>
          <h4><span style={border}>Like, Dislike</span></h4>
          <span style={{ color: 'green'}}>{ like.value }</span>
          <button onClick={like.increase} style={margin}>Like</button>
          <button onClick={disLike.increase} style={margin}>Dislike</button>
          <span style={{ color: 'red'}}>{ disLike.value }</span>
        </div>
        <hr />
        <Footer>
          <div>
            <Link to='/'  style={padding}>H</Link>
            <Link to='/notes'  style={padding}>N</Link>
            <Link to='/users' style={padding}>U</Link>
            <Link to='/more' style={padding}>M</Link>
          </div>
          <div>
            <p>Notes app, Dep. of CS, 2021</p>
          </div>
        </Footer>
    </Page>
  );
}

export default App;
