import { Navigate } from "react-router-dom";
import { useAuth } from "../../redux/hooks/useAuth";

export const PublicRoute = ({ component: Component, redirectTo = '/', restricted = false }) => {
    const { isLoggedIn } = useAuth();
    const shouldRedirect = isLoggedIn && restricted;

    return shouldRedirect ? <Navigate to={redirectTo} replace={ true } /> : <Component />

};