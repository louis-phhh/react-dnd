import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled"
import CaseItem from "./CaseItem";

import * as dummyData from './dummyData';
import DndCasePlaceholder from "./DndCasePlaceholder";
import { Add } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { capitalizeFirstLetter, moveItemToAnotherArray, swapArrayLocs } from "../../../Utils";

const CaseOverviewContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
}));

const ListCaseContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  // height: '100%',
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
}));

const ListCase = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  // height: '100%',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
}));

function ListCaseTitle(props) {
  return <Typography sx={{ lineHeight: '1', fontWeight: '600' }} variant="h6">{props.children}</Typography>
}

function ButtonAddNewCase(props) {
  const theme = useTheme();

  return (
    <Button
      sx={{
        width: '100%',
        background: theme.palette.grey[900],
        color: 'white',
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'none',
        pt: theme.spacing(1.5),
        pb: theme.spacing(1.5),
        borderRadius: theme.spacing(2),
        '&:hover': {
          background: theme.palette.grey[600],
        }
      }}
    >
      <Add />
      <Typography fontSize='larger'>Add Case</Typography>
    </Button>
  )
}


export default function CaseOverview(props) {
  const [listNewCase, setListNewCase] = useState([]);
  const [listInProgressCase, setListInProgressCase] = useState([]);
  const [listClosedCase, setListClosedCase] = useState([]);

  const [isDragging, setIsDragging] = useState(false);

  function getListCaseFromDroppableId(dropableId) {
    return ({
      listNewCase,
      listInProgressCase,
      listClosedCase
    })[dropableId]
  }

  function setListCaseByDropableId(dropableId, listCase) {
    ({
      setListNewCase,
      setListInProgressCase,
      setListClosedCase,
    })[`set${capitalizeFirstLetter(dropableId)}`](listCase);
  }

  useEffect(() => {
    setListNewCase(dummyData.listNewCase);
    setListInProgressCase(dummyData.listInProgressCase);
    setListClosedCase(dummyData.listClosedCase);
  }, [
    setListNewCase,
    setListInProgressCase,
    setListClosedCase,
    dummyData.listNewCase,
    dummyData.listInProgressCase,
    dummyData.listClosedCase
  ]);

  const handleDragStart = () => {
    setIsDragging(true);
  }

  const handleDragEnd = (result) => {
    console.log('droppp', result)
    setIsDragging(false);
    const { source, destination, type} = result;
    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId
    ) {
      if (source.index === destination.index) return;
      if (type === 'group') {
        const reorderedListCase = swapArrayLocs(
          getListCaseFromDroppableId(source.droppableId),
          source.index,
          destination.index,
        );
        setListCaseByDropableId(source.droppableId, reorderedListCase);
      }

      return;
    } else {
      if (type === 'group') {
        const sourceListCase = getListCaseFromDroppableId(source.droppableId);
        const destinationListCase = getListCaseFromDroppableId(destination.droppableId);
        const [
          reorderedSourceListCase,
          reorderedDestinationListCase,
        ] = moveItemToAnotherArray(
          sourceListCase,
          source.index,
          destinationListCase,
          destination.index,
        );
        
        setListCaseByDropableId(source.droppableId, reorderedSourceListCase);
        setListCaseByDropableId(destination.droppableId, reorderedDestinationListCase);
      }
    }
  }

  return (
    <CaseOverviewContainer sx={{ flex: 1 }}>
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <ListCaseContainer>
          <Droppable droppableId='listNewCase' type='group'>
          {(provided) => {
            return (
              <ListCase>
                <ListCaseTitle >New</ListCaseTitle>
                <div
                  style={{ minHeight: '1rem' }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                {
                  listNewCase && listNewCase.map((itemData, idx) => (
                    <Draggable
                      key={itemData.id}
                      draggableId={itemData.id}
                      index={idx}
                    >
                    {(provided) => (
                      <CaseItem
                        {...itemData}
                        draggableProps={provided.draggableProps}
                        dragHandleProps={provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        index={idx}
                      />
                    )}
                    </Draggable>
                  ))
                }
                </div>
                {!isDragging && <ButtonAddNewCase />}
              </ListCase>
            )
          }}
          </Droppable>
        </ListCaseContainer>

        <ListCaseContainer>
          <Droppable droppableId='listInProgressCase' type='group'>
          {(provided) => {
            return (
              <ListCase>
                <ListCaseTitle >In Progress</ListCaseTitle>
                <div
                  style={{ minHeight: '1rem' }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                {
                  listInProgressCase && listInProgressCase.map((itemData, idx) => (
                    <Draggable
                      key={itemData.id}
                      draggableId={itemData.id}
                      index={idx}
                    >
                    {(provided) => (
                      <CaseItem
                        {...itemData}
                        draggableProps={provided.draggableProps}
                        dragHandleProps={provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        index={idx}
                      />
                    )}
                    </Draggable>
                  ))
                }
                </div>
                {!isDragging && <DndCasePlaceholder />}
              </ListCase>
            )
          }}
          </Droppable>

        </ListCaseContainer>

        <ListCaseContainer>
          <Droppable droppableId='listClosedCase' type='group'>
          {(provided) => {
            return (
              <ListCase>
                <ListCaseTitle >Closed</ListCaseTitle>
                <div
                  style={{ minHeight: '1rem' }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                {
                  listInProgressCase && listClosedCase.map((itemData, idx) => (
                    <Draggable
                      key={itemData.id}
                      draggableId={itemData.id}
                      index={idx}
                    >
                    {(provided) => (
                      <CaseItem
                        {...itemData}
                        draggableProps={provided.draggableProps}
                        dragHandleProps={provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        index={idx}
                      />
                    )}
                    </Draggable>
                  ))
                }
                </div>
                {!isDragging && <DndCasePlaceholder />}
              </ListCase>
            )
          }}
          </Droppable>

        </ListCaseContainer>
      </DragDropContext>
    </CaseOverviewContainer>
  )
}
