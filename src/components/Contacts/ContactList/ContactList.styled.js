import styled from 'styled-components';

export const ContactListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;

export const ContactListItemStyled = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #000;
    &:last-child {
        border-bottom: none;
    }
`