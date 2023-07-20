import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import ukraineMap from "../../../images/ukraine_map.png";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgb(91, 180, 58);
  background: linear-gradient(
    38deg,
    rgba(91, 180, 58, 0.46262254901960786) 0%,
    rgba(82, 253, 29, 0.6643032212885154) 50%,
    rgba(69, 252, 139, 0.76234243697479) 100%
  );
  border-bottom: solid 2px #000;
  /* background-image: url(${ukraineMap});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 15%;
    background-origin: content-box; */
  margin-bottom: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  gap: 20px;
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

export const LinkStyled = styled(Link)`
  font-size: 20px;
  font-weight: 400;
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

export const AuthNavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  gap: 20px;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const UserGreetings = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #2a7cdd;
  text-shadow: 1px 1px 1px #000;
`;

export const LogoutBtn = styled.button`
  padding: 4px 8px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
