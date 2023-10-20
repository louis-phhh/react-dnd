import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NavLink from '../../Common/NavLink';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const BorderedNavLink = styled(NavLink)(({ theme, open }) => ({
  '& .MuiButtonBase-root': {
    // padding: theme.spacing(2),
    borderRadius: theme.spacing(3),
    width: !open ? theme.spacing(6) : undefined,
    color: open ? 'white' : theme.palette.grey[900]
  },
  '&.active .MuiButtonBase-root': {
    backgroundColor: 'white',
    color: theme.palette.grey[900],
  },
  '&.active .MuiListItemIcon-root': {
    color: theme.palette.grey[900],
    
  },
  '& .MuiListItemIcon-root': {
    ...(!open && {
      position: 'relative',
      left: '-3px',
      minWidth: theme.spacing(6),
    }),
  },
}));

const ItemText = styled(ListItemText)(() => ({
  '& .MuiTypography-root': {
    fontWeight: 'bold'
  }
}));

const ItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: theme.spacing(4),
}));

export function MainMenuItems(props) {
  const { open } = props;
  return (
    <React.Fragment>
      <BorderedNavLink open={open} to='/dashboard'>
        <ListItemButton>
          <ItemIcon>
            <DashboardIcon />
          </ItemIcon>
          <ItemText primary="Dashboard" />
        </ListItemButton>
      </BorderedNavLink>
      <BorderedNavLink open={open} to='/chat-rooms'>
        <ListItemButton>
          <ItemIcon>
            <PeopleIcon />
          </ItemIcon>
          <ItemText primary="Chat Rooms" />
        </ListItemButton>
      </BorderedNavLink>
    </React.Fragment>
  )
};

export function SecondaryMenuItems(props) {
  const { open } = props;

  const theme = useTheme();

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: open ? 'white' : theme.palette.grey[900] }} primary="Settings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: open ? 'white' : theme.palette.grey[900] }} primary="Log out" />
      </ListItemButton>
    </React.Fragment>
  );
}
