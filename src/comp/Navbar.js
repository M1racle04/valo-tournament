import { AppBar , Box, Toolbar, Typography , Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../img/main.jpg';
import './nav.css'






  const Navbar = ( ) => {
    return <>
    <Box sx={{flexGrow: 1}}>

    <AppBar position="static"   style={{ background: '#BD3944' }}>

<Toolbar>
     
     <img src={logo} alt="logo" className="logo"  />
    <Typography variant="h5" component="div" sx={{flexGrow:1}}>
    Valorant Campus Challengers
    </Typography>
    <Button component={NavLink} to="/valo-tournament/" style={({isActive})=> {return{backgroundColor: isActive ? "#FD4556": ""}}}  sx={[{color: "white"} , {
      '&:hover': {
        color: 'white',
        
      }}]} >Home</Button>
    <Button component={NavLink} to="/valo-tournament/rules" style={({isActive})=> {return{backgroundColor: isActive ? "#FD4556": ""}}} sx={[{color: "white"} , {
      '&:hover': {
        color: 'white',
        
      }}]} 
        >Rules</Button>
    <Button component={NavLink} to="/valo-tournament/contactus" style={({isActive})=> {return{backgroundColor: isActive ? "#FD4556": ""}}}  sx={[{color: "white"} , {
      '&:hover': {
        color: 'white',
        
      }}]} >Contact Us</Button>
</Toolbar>

    </AppBar>

    </Box>
    
    </>
    
   
    
    
    
    
    }

    export default Navbar;