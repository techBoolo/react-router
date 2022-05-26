import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getInvoice, deleteInvoice } from '../../invoiceData';

const Invoice = (props) => {
  const params = useParams();  // this is a string
  const invoice = getInvoice(parseInt(params.number, 10))

  const navigate = useNavigate();
  return (
    <Box>
      <Typography component='h2' variant='h6'>
        Total Due: {invoice.amount} 
      </Typography> 
      <Typography component='h2' variant='h6'>
        {`${invoice.name}: ${invoice.number}` } 
      </Typography> 
      <Typography component='h2' variant='h6'>
        Due date: {invoice.due}
      </Typography> 
      <Button
        onClick={() => {
          deleteInvoice(invoice.number)
          navigate('/invoices')
        }}   
      >
        delete
      </Button>
    </Box>
  );
};

export default Invoice;
