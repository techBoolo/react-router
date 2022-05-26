import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';

const Navbar = (props) => {

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography component='h1' variant='h6'>Router</Typography>
          <Button variant='outlined'>login</Button>
          <IconButton><MenuIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
