import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 250ms linear;
    margin-bottom: 10px;
    &:hover, &:focus {
        background-color: #0069d9;

    }
`;

export const MovieDetailsWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
 
    @media (max-width: 767px) {
        flex-direction: column;
    }

`;

export const MovieImage = styled.img`
    height: 450px;
    margin-right: 20px;

`;

export const MovieTitle = styled.h2`
    font-size: 24px;

`;

export const GenresStyled = styled.ul`
    list-style: none;
    padding: 0;  
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

`;

export const AdditionalInfoList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const AdditionalInfoItem = styled.li`
    margin-bottom: 10px;
    &:hover, &:focus {
        color: #007bff;
    }
    padding: 5px;
    cursor: pointer;
`;