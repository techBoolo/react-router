import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Home = (props) => {

  return (
    <Box 
      component='main'
      sx = {{
        padding: '1rem 0',
      }}
    >
      <Typography component='h2' variant='h6'>Home</Typography>    
    </Box>
  );
};
export default Home;
