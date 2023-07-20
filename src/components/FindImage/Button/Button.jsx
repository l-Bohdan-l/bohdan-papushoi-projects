import { ButtonStyled, ButtonWrapper} from "./Button.styled";

export const Button = ({ loadMore }) => { 

    return (
        <ButtonWrapper>
            <ButtonStyled onClick={loadMore} type="submit">Load more</ButtonStyled>
        </ButtonWrapper>
    )
};