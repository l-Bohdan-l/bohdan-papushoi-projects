import { useSelector } from "react-redux";
import { selectAuthName, selectAuthEmail, selectIsLoggedIn, selectToken } from "../contacts/selectors/selectors";

export const useAuth = () => { 
    const token = useSelector(selectToken);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const authName = useSelector(selectAuthName);
    const authEmail = useSelector(selectAuthEmail);
    return {authName, authEmail, isLoggedIn, token }
}