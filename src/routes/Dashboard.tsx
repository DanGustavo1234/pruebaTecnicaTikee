import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button} from '@mui/material';
import { useAuth } from '../auth/AuthProvider';
import { Link, Outlet } from 'react-router-dom';


const drawerWidth = 240;

export default function Dashboard() {
  const auth=useAuth()
  const user = localStorage.getItem('user');

  const handleClick = () => {
    auth.setIsAuthenticated(false)
    window.localStorage.clear();
  };
  return (
    <Box sx={{ display: 'flex' }}>
     
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          backgroundColor:'#0c8ee2',
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' ,backgroundColor: '#0c8ee2'},
        }}
      >
        <Box sx={{display:'flex',textAlign:'center',alignItems:'center',alignContent:'center',flexDirection:'column',margin:"10%"}}>
        <img src="/tikee.webp" width="140px"/>
        </Box>
        
        <Box sx={{ overflow: 'auto', margin: '1%' }}>
          <List>
            {['Home', 'Gmail', 'Enviar Gmail'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={`${text.toLowerCase().replace(' ', '')}`}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, position: 'relative' }}>
         
      <Box sx={{
      display: 'flex',
      position: 'fixed',
      right: '3%',
      top: '3%',   
      zIndex: 1000,
      }}>
          <Button onClick={handleClick} >
            <LogoutIcon sx={{width:'50px'}}/>
          </Button>
      </Box>
          <Toolbar />
          <Typography sx={{ marginBottom: 2 }}>
            BIENVENIDO {user}
          </Typography>
          <Outlet/>
        </Box>

    </Box>
  );
}