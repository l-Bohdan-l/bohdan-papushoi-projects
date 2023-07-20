import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    border: 1px solid #cadbdb;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin-top: 20px;

`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    padding-top: 10px;

`;

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 2px solid #000;

`;

export const ProfileName = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;

`;

export const ProfileTag = styled.p`
    font-size: 16px;
    color: grey;
`

export const ProfileLocation = styled.p`
    font-size: 16px;
    color: grey;

`;

export const ProfileStats = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    background-color: #e4eced;
    border-radius: 0 0 5px 5px;
    width: 100%;
    margin: 0;

`;

export const ProfileStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-top: 1px solid #cadbdb; 
    &:not(:last-child) {
        border-right: 1px solid #cadbdb;        
    }

`;
