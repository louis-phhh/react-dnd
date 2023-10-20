import { Box, Icon, Typography } from "@mui/material";
import Row from "../../../../Common/Row";
import LinearProgress from "../../../../Common/LineProgress";
import { useTheme } from "@emotion/react";
import { ChatBubble } from "@mui/icons-material";
import styled from "@emotion/styled";

const ProgressTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600], lineHeight: '100%'
}));

export default function ProgressRow(props) {
  const { progress } = props;

  const theme = useTheme();

  return (
    <Row justifyContent='space-between' sx={{ marginTop: theme.spacing(2) }}>
      <Box  sx={{ width: '75%' }}>
        <LinearProgress
          value={progress}
          sx={{
            width: '100%',
            height: theme.spacing(1),
            borderRadius: theme.spacing(0.5),
          }}
        />
        <Row justifyContent='space-between' alignItems='flex-end' mt={1}>
          <ProgressTitle variant='body2'>
            Number
          </ProgressTitle>
          <ProgressTitle variant='body2'>
            {progress}%
          </ProgressTitle>
        </Row>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Icon>
            <ChatBubble />
          </Icon>
      </Box>
    </Row>
  )
}