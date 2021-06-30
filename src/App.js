import { useState } from 'react';
import { Switch, Route, Link, useHistory, Redirect, useRouteMatch } from 'react-router-dom';
import { useCounter, useField } from './customHook';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Button, Alert, Navbar, Nav } from 'react-bootstrap';
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
      <div>
        <h4>N</h4>
        <Table striped>
        <tbody>
          <ul>
            { notes.map(note => 
                <tr key={note.id}>
                  <td>
                    <Link to={`/notes/${note.id}`}>{note.content}</Link>
                  </td>
                  <td>
                    { note.content }
                  </td>
                </tr>
              )
            }
          </ul>
        </tbody>
        </Table>
      </div>
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
      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <div>
              <Form.Label>Nm:</Form.Label> <Form.Control type='text' name='username' />
            </div>
            <div>
              <Form.Label>P:</Form.Label> <Form.Control type='password'/>
            </div>
            <Button variant='primary' type='submit'>Li</Button>
        </Form.Group>
      </Form>
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
    setMessage(`Welcome ${ev.target[0].value}`);
    setTimeout(() => {
      setMessage(null) 
    }, 5000)
    history.push('/');
  }
  const padding = { padding: 5 }
  const margin = { margin: 5 }
  const border = { borderBottom: "2px solid #ccc" }

  return (
    <div className="container">
      {
        (message && 
         <Alert variant='success'>
          { message }
         </Alert>)
      }
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
                <Nav.Link href='#' as='span'>
                  <Link to='/'  style={padding}>H</Link>
                </Nav.Link>
                <Nav.Link href='#' as='span'>
                  <Link to='/notes'  style={padding}>N</Link>
                </Nav.Link>
                <Nav.Link href='#' as='span'>
                <Link to='/users' style={padding}>U</Link>
                </Nav.Link>
                <Nav.Link href='#' as='span'>
                  { user
                    ? <em>{ user } logged in</em>
                    : <Link to='/login' style={padding}>login</Link>
                  }
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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
    </div>
  );
}

export default App;
