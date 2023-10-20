import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";


export default function DndCasePlaceholder(props) {

  const theme = useTheme();

  return (
    <Box sx={{
      marginTop: theme.spacing(2),
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(2),
      borderRadius: theme.spacing(2),
      border: `dashed 2px ${theme.palette.grey[400]}`,
      height: theme.spacing(17),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography fontSize='larger' sx={{ color: theme.palette.grey[400] }}>Drag & Drop</Typography>
    </Box>
  )
} 