import { useState } from 'react';
import { Switch, Route, Link, useHistory, Redirect, useRouteMatch } from 'react-router-dom';
import { useCounter, useField } from './customHook';
import  Container  from '@material-ui/core/Container';

import { TableContainer, TableCell, TableRow, Paper, Table, TableBody } from '@material-ui/core';
import { TextField,Toolbar, Button, AppBar, IconButton } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
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
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
          { notes.map(note => (
              <TableRow key={note.id}>
                <TableCell>
                  <Link to={`/notes/${note.id}`}>{note.content}</Link>
                </TableCell>
                <TableCell>
                  { note.content }
                </TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
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
            <TextField label='N:' />
          </div>
          <div>
            <TextField label='P:' type='password'/>
          </div>
          <Button variant='contained' color='primary' type='submit'>Li</Button>
        </form>
      </div>
    )
}

function App() {
  const [ user, setUser ] = useState(null);
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState(null);
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
    setMessage(`Welcome ${ev.target[0].value}`)
      setTimeout(() => {
        setMessage(null) 
      }, 3000)
    history.push('/');
  }
  const padding = { padding: 5 }
  const margin = { margin: 5 }
  const border = { borderBottom: "2px solid #ccc" }

  return (
    <Container>
      <div>
        {
          (message && 
           <Alert severity='success'>
            { message }
           </Alert>
        )}
      </div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
            </IconButton>

            <Button color='inherit'><Link to='/'>H</Link></Button>
            <Button color='inherit' component={Link} to='/notes'>N</Button>
            <Button color='inherit'><Link to='/users'>U</Link></Button>
            { user
              ? <em>{ user } logged in</em>
              : <Button color='inherit' component={Link} to='/login'>login</Button>
            }
          </Toolbar>
        </AppBar>
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
        <div>
          <p>Notes app, Dep. of CS, 2021</p>
        </div>
        <div>
          <Link to='/'  style={padding}>H</Link>
          <Link to='/notes'  style={padding}>N</Link>
          <Link to='/users' style={padding}>U</Link>
          <Link to='/more' style={padding}>M</Link>
        </div>
    </Container>
  );
}

export default App;
