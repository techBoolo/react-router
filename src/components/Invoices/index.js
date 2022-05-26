import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { NavLink as RouterNavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getInvoices } from '../../invoiceData';
import Button from '@mui/material/Button';

const QueryNavLink = ({to, ...props}) => {
  let location = useLocation();
  return <RouterNavLink to={to + location.search} {...props} />
}


const Invoices = (props) => {
  let invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Box sx={{ display: 'flex'}}>
    <Box 
      component='main'
      sx = {{
        borderRight: '1px solid #ccc',
        padding: '1rem',
      }}
    >
      <Typography component='h2' variant='h6'>Invoices</Typography>    
      <input
        value={searchParams.get('filter') || ''}
        placeholder='search'
        onChange={ev => {
          let filter = ev.target.value;
          if(filter) {
            setSearchParams({ filter })
          } else {
            setSearchParams({})
          }
        }}
      />
      {
        invoices
        .filter(invoice => {
          let filter = searchParams.get('filter');
          if(!filter) return true
          let name = invoice.name.toLowerCase();
          return name.startsWith(filter.toLowerCase())
        })
        .map(invoice => (
          <Button 
            component={QueryNavLink}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            sx={({isActive}) => {
              return {display: 'block',
                textDecoration: 'none',
                color: isActive ? 'red' : '#f3c',
                margin: '1rem 0',
                borderBottom: '2px solid white',
                '&.active': {
                  color: 'red',
                  opacity: '0.5',
                }
              }
            }}
          >
            {invoice.name}
          </Button>
        ))
      }
    </Box>
    <Box sx={{ padding: '1rem' }}>
      <Outlet />
    </Box>
    </Box>
  );
};
export default Invoices;
