import styled from "styled-components";

export const CastList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 0;    
`;

export const CastListItem = styled.li`
    /* flex-basis: calc((100% - 30px) / 3); */
    height: 410px;
    width: 200px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 10px 0px;
    transition: all 250ms ease-in-out 0s;
    margin-bottom: 15px;
    &:hover, &:focus {
        transform: scale(1.05);
        box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 20px 0px;
    }
`;

export const CastImage = styled.img`
    height: 300px;
`;

export const CastNameWrapper = styled.div`
    padding: 10px;

`;

export const CastCharacterWrapper = styled.span`
    font-weight: 700;
`;