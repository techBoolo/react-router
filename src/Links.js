import { NavLink as RouterNavLink } from 'react-router-dom';
import  Link  from '@mui/material/Link';
import  Button  from '@mui/material/Button';

const Links = (props) => {

  return (
    <>
      <Button 
        component={RouterNavLink} 
        to='/'
        sx={{
          color: '#fa8',
          textDecoration: 'none',
          borderBottom: '3px solid #fff',
          ':hover': {
            color: '#ccc',
            borderBottom: '3px solid #789',
          },
          '&:focus': {
            borderBottom: '3px solid green',
          },
          '&:active': {
            borderBottom: '3px solid blue',
          },
        }}
      >Home</Button> | {" "}     
      <Button 
        component={RouterNavLink} 
        to='/invoices'
        sx={{
          color: '#fa8',
          textDecoration: 'none',
          ':hover': {
            color: '#ccc',
            borderBottom: '3px solid #789',
          },
          '&:focus': {
            borderBottom: '3px solid green',
          },
        }}
      >Invoices</Button> | {" "}     
      <Button 
        component= {RouterNavLink} 
        to='/expenses'
        sx={{
          color: '#fa8',
          textDecoration: 'none',
          ':hover': {
            color: '#ccc',
            borderBottom: '3px solid #789',
          },
          '&:focus': {
            borderBottom: '3px solid green',
          },
          '&:active': {
            borderBottom: '3px solid green',
          },
        }}
      >Expenses</Button>      
    </>
  );
};

export default Links;
