import { useLocation } from "react-router-dom";
import {
  HeaderStyled,
  MainTitle,
  MainTitleSpan,
  Nav,
  NavItem,
  NavLinkStyled,
  GoBackBtn,
} from "./MovieHeader.styled";

function MovieHeader() {
  const location = useLocation();
  // console.log("location", location);
  return (
    <HeaderStyled>
      <MainTitle>
        Movie <MainTitleSpan>Search</MainTitleSpan>
      </MainTitle>
      <Nav>
        <NavItem>
          <NavLinkStyled to="/movie-gallery" state={{ from: location }}>
            Home
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/movie-gallery/movies">Movies</NavLinkStyled>
        </NavItem>
      </Nav>
      <GoBackBtn to="/">Go Back</GoBackBtn>
    </HeaderStyled>
  );
}

export default MovieHeader;
