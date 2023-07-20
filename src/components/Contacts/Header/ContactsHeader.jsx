import {
  clearCredentials,
  useGetCurrentUserQuery,
  useLogoutMutation,
} from "../../../redux/authSlice";
import {
  HeaderContainer,
  Nav,
  NavLinkStyled,
  AuthNavList,
  UserWrapper,
  UserGreetings,
  LogoutBtn,
  LinkStyled,
} from "./ContactsHeader.styled";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../redux/hooks/useAuth";

export function ContactsHeader() {
  const { isLoggedIn, token } = useAuth();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  // console.log("isLoggedIn", isLoggedIn);
  // const { authName } = useAuth();
  const { data } = useGetCurrentUserQuery(undefined, { skip: !token });

  const handleClick = (e) => {
    logout();
    dispatch(clearCredentials());
  };
  return (
    <HeaderContainer>
      <Nav>
        <LinkStyled to="/">to Main Page</LinkStyled>
        <NavLinkStyled to="/phonebook">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="contacts">Contacts</NavLinkStyled>}
      </Nav>
      {isLoggedIn && (
        <UserWrapper>
          <UserGreetings>
            Welcome {data && <span>{data.name}</span>}
          </UserGreetings>
          <LogoutBtn onClick={handleClick} type="button">
            Logout
          </LogoutBtn>
        </UserWrapper>
      )}
      {!isLoggedIn && (
        <AuthNavList>
          <NavLinkStyled to="register">Registration</NavLinkStyled>
          <NavLinkStyled to="login">Login</NavLinkStyled>
        </AuthNavList>
      )}
    </HeaderContainer>
  );
}
