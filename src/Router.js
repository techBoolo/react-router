import { Routes, Route, useNavigate } from 'react-router-dom';
import  Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Button  from '@mui/material/Button';

import Home from './components/Home/';
import Expenses from './components/Expenses/';
import Invoices from './components/Invoices/';
import Invoice from './components/Invoice/';

const Router = (props) => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/expenses' element={<Expenses />}/> 
      <Route path='/invoices' element={<Invoices />}> 
        <Route 
          index
          element={
            <Box sx={{ padding: '1rem'}}>
              <Typography>Select an invoice</Typography>
            </Box>
          }
        />
        <Route path=':number' element={<Invoice />} />
      </Route>
      <Route path='*' element={
        <Box sx={{ padding: '1rem'}}>
          <Typography>nothing here</Typography>
          <Button onClick={() => navigate(-1)} size='small' sx={{}}>back</Button>
        </Box>
      }/> 
    </Routes>
  );
};

export default Router;
