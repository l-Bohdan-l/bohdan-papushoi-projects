import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #070606;
  color: #fff;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
  text-shadow: 3px 5px 2px #474747;
`;

export const LinkStyled = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  text-shadow: 3px 5px 2px #474747;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: rgb(245 108 8);
    text-shadow: rgb(251 94 50 / 76%) 3px 4px 3px;
  }
`;
