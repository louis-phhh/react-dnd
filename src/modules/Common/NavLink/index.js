import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export default StyledLink;