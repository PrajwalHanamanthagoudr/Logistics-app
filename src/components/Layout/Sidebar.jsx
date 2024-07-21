import { Link, useLocation } from 'react-router-dom';
import { List, ListItem,  Typography, useMediaQuery, useTheme } from '@mui/material';
import { LocalShippingRounded, PersonRounded, SummarizeRounded, ExitToApp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const sidebarItems = [
  { text: 'My Moves', icon: <LocalShippingRounded />, path: '/my-moves' },
  { text: 'My Profile', icon: <PersonRounded />, path: '/my-profile' },
  { text: 'Get Quote', icon: <SummarizeRounded />, path: '/get-quote' },
  { text: 'Logout', icon: <ExitToApp />, path: '/logout' },
];

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation(); 

  return (
    <List>
      {sidebarItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          sx={{
            borderLeft: location.pathname === item.path ? '4px solid #eb5541' : 'none',
          }}
        >
          <IconButton> 
            {item.icon}
          </IconButton>
           {!isMobile && <Typography 
           fontFamily={'Poppins, sans-serif'} 
           textTransform={'uppercase'} 
           fontSize={'12px'} 
           fontWeight={599}
           sx={{color:'#0a0a0a'}}
           >{item.text}</Typography>}
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
