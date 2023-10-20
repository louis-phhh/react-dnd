import { Typography } from "@mui/material";
import Row from "../../../../Common/Row";
import styled from "@emotion/styled";
import EditButton from "./EditButton";

const CaseName = styled(Typography)(() => ({
  fontWeight: 'bold'
}));

export default function TitleRow(props) {
  const { caseName } = props;

  return (
    <Row justifyContent='space-between' alignItems='center'>
      <CaseName variant='h5'>{caseName}</CaseName>
      <EditButton />
    </Row>
  )
}