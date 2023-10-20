import { Box, ListItem, ListItemButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import TitleRow from "./TitleRow";
import LocationRow from "./LocationRow";
import ProgressRow from "./ProgressRow";
import { useRef, useState } from "react";
import styled from "@emotion/styled";


const CaseDragOverlay = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[400],
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: theme.spacing(2),
}));

const CaseItemContainer = styled.div(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(2),
  backgroundColor: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  // cursor: 'pointer',
  // '&:hover': {
  //   backgroundColor: theme.palette.grey[300],
  // }
}))
export default function CaseItem(props) {
  const {
    caseName,
    location,
    progress,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps,
  } = props;

  const theme = useTheme();


  return (
    <CaseItemContainer 
      className='case-item'
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
    >
      <TitleRow caseName={caseName}/>
      <LocationRow location={location}/>
      <ProgressRow progress={progress}/>
      {/* { show  && <CaseDragOverlay /> } */}
    </CaseItemContainer>
  )
} 