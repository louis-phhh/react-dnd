
import { Box, Icon, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import Row from "../../../../Common/Row";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const LocationIcon = styled(LocationOn)(({ theme }) => ({
  fontSize: theme.spacing(2),
  position: 'relative',
  left: -0.1,
}));

export default function LocationRow(props) {
  const {
    location = 'Country',
  } = props;

  const theme = useTheme();

  return (
    <Row alignItems='center' sx={{ lineHeight: '100%' }}>
      <Box sx={{
        backgroundColor: 'black',
        borderRadius: '50%',
        color: 'white',
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing(0.5),
      }}>
        <LocationIcon />
      </Box>
      <Typography variant='subtitle1'>Location: {location}</Typography>
    </Row>
  )
}