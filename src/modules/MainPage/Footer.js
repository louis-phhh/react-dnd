import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const FooterContainer = styled(Box)(() => ({
  paddingTop: '2rem'
}));

export default function Footer(props) {
  return (
    <FooterContainer>
      <Typography align="center" {...props}>
        Footer Here
      </Typography>
    </FooterContainer>
  );
}