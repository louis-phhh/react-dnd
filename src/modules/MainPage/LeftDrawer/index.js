import styled from "@emotion/styled";
import { ChevronLeft } from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton, List, Toolbar } from "@mui/material";
import { MainMenuItems, SecondaryMenuItems } from "./MenuItems";

const StyledDrawer = styled(Drawer)(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.grey[900],
      color: 'white',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: theme.drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(9),
      }),
    },
    '& .MuiDrawer-paper .MuiListItemIcon-root': {
      color: 'white',
    }
  }),
);

const ListMenuItemContainer = styled(Box)(({ theme, open }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  '& .top-menu-items': {
    flex: 8,
  },
  '& .bot-menu-items': {
    flex: 2,
  }
}))

function LeftDrawer(props) {
  const { open, toggleDrawer } = props;
  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
      {/* <Divider /> */}
      <ListMenuItemContainer mt={2}>
        <Box className="menu-items top-menu-items">
          <MainMenuItems open={open}/>
        </Box>
        <Box className="menu-items bot-menu-items">
          <Divider sx={{ backgroundColor: 'white', my: 1 }} />
          <SecondaryMenuItems open={open} />
        </Box>
      </ListMenuItemContainer>
    </StyledDrawer>
  )
}

export default LeftDrawer;