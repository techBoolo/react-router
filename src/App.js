import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Navbar from './components/Navbar/';
import Router from './Router';

import Links from './Links';
function App(props) {

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Typography component='h1' variant='h6' sx={{ paddingBottom: '1rem'}}>keeper</Typography>

        <Box component='nav' sx={{
          borderBottom: '1px solid #ccc',
            paddingBottom: '1rem'
        }}>
          <Links />
        </Box>
     
        <Box>
          <Router />
        </Box>

      </Container>
    </>
  );
}

export default App;
