import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import ukraineMap from "../../../images/ukraine_map.png";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background-color: #f5d99bb8;
  border-bottom: solid 2px #000;
  background-image: url(${ukraineMap});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 110px;
  background-origin: content-box;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #2a7cdd;
  text-shadow: 1px 1px 1px #000;
`;

export const MainTitleSpan = styled.span`
  color: #f3d92e;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  color: #2a7cdd;
  text-shadow: 1px 1px 1px #000;
  text-decoration: none;
  transition: all 250ms ease-in-out;
  &.active {
    color: #f3d92e;
  }

  &:hover,
  &:focus {
    color: #f3d92e;
    text-shadow: 2px 2px 2px #000;
  }
`;

export const GoBackBtn = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: #2a7cdd;
  text-shadow: 1px 1px 1px #000;
  text-decoration: none;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: #f3d92e;
    text-shadow: 2px 2px 2px #000;
  }
`;
