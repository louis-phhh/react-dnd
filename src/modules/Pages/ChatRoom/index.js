import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";


const DashboardHeader = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  fontWeight: 'bold',
}));

export default function Dashboard(props) {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: 'white',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: theme.spacing(3),
      overflowY: 'scroll',
    }}>
      <DashboardHeader variant='h4'>Chat Rooms</DashboardHeader>
    </Box>
  );
}
