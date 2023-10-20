import styled from "@emotion/styled";
import { Directions, Menu as MenuIcon, Notifications, Search } from "@mui/icons-material";
import { AppBar, Badge, Box, Divider, Hidden, IconButton, InputBase, Paper, Toolbar, Typography } from "@mui/material";

const HeaderContainer = styled(AppBar)((props) => {
  const { theme, open } = props;
  return {
    zIndex: theme.zIndex.drawer + 1, // over the drawer
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // style while drawer is opening
    ...(open && {
      marginLeft: theme.drawerWidth,
      width: `calc(100% - ${theme.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingRight: theme.spacing(3),
  display: 'flex',
  background: 'white',
  color: theme.palette.grey[900],
  justifyContent: 'space-between',
  '& .MuiBox-root': {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiBox-root.header-right-zone': {
    justifyContent: 'flex-end',
  },
}));

const Avatar = styled(Box)(({ theme }) => ({
  width: theme.avatarWidth,
  height: theme.avatarHeight,
  overflow: 'hidden',
  padding: 4,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  }
}));

function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{
        height: '2rem',
        borderRadius: '1rem',
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        boxShadow: 'rgba(0, 0, 0, 0.35) 2px 2px 5px'
      }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Cases"
      />
    </Paper>
  );
}

function PageHeader(props) {
  const { toggleDrawer, open } = props;
  
  return (
    <HeaderContainer open={open}>
      <StyledToolbar>
        <Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
        </Box>
        <Box>
            <SearchInput />
        </Box>
        <Box className='header-right-zone'>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Avatar>
                <img alt='avatar' s src='https://placehold.co/600x400' />
              </Avatar>
            </Badge>
          </IconButton>
        </Box>
      </StyledToolbar>
    </HeaderContainer>
  )
}

export default PageHeader;