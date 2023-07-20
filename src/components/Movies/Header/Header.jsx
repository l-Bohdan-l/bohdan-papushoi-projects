import { useLocation } from "react-router-dom";
import { HeaderStyled, MainTitle, MainTitleSpan, Nav, NavItem, NavLinkStyled } from "./Header.styled";

function Header() {
    const location = useLocation();
    console.log('location', location);
    return (
        <HeaderStyled>
            <MainTitle>Movie <MainTitleSpan>Search</MainTitleSpan></MainTitle>
            <Nav>
                <NavItem>                    
                    <NavLinkStyled to='/' state={{from: location}}>Home</NavLinkStyled>
                </NavItem>
                <NavItem>                    
                    <NavLinkStyled to='/movies'>Movies</NavLinkStyled>
                </NavItem>
            </Nav>
        </HeaderStyled>
    );
}

export default Header;