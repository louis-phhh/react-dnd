import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Footer from './Footer';
import PageHeader from './PageHeader';
import LeftDrawer from './LeftDrawer';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';

const defaultTheme = createTheme({
  drawerWidth: 200,
  avatarWidth: 40,
  avatarHeight: 40,
  palette: {
    background: {
      default: "#fff"
    },
    text: {
      primary: "#212121"
    }
  }
});

const PageContainer = styled(Box)(() => ({
  display: 'flex',
}));

const MainContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light'
    ? theme.palette.grey[100]
    : theme.palette.grey[900],
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
  paddingTop: '4rem',
}));

export default function MainPage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = React.useCallback(() => {
    setOpen((open) => !open);
  }, [setOpen]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PageContainer>
          <CssBaseline />
          <PageHeader toggleDrawer={toggleDrawer} open={open} />
          <LeftDrawer toggleDrawer={toggleDrawer} open={open} />
          <MainContentContainer>
            {/* <Footer /> */}
            <Routing />
          </MainContentContainer>
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
