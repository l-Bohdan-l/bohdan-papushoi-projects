import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
    color: #2a7cdd;
    text-shadow: 1px 1px 1px #000;
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: baseline;
    list-style: none;
    gap: 10px;
    /* flex-basis: calc((100% - 30px) / 3); */

`;

export const ListItem = styled.li`
    flex-basis: calc((100% - 30px) / 3);
    min-height: 100px;
    height: 475px;
    max-width: 250px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    transition: all 250ms ease-in-out;
    margin-bottom: 15px;
    &:hover {
        transform: scale(1.05);

    }
`;

export const ImageStyled = styled.img`
    width: 250px;
`;

export const MovieTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #2a7cdd;
    text-shadow: 1px 1px 1px #000;
    text-align: center;

`;

export const TitleWrapper = styled.div`
    padding: 15px;
`;

export const StyledLink = styled(Link)`
    height: 100%;
    display: grid;
`;