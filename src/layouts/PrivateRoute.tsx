import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AccessDenied from "@/pages/AccessDenied";
// import { ROLE } from "./features//auth";
import { selectIsLoggedIn, selectUser } from "@/redux/features/app/appSlice";
import { TRole } from "@/@types";

interface Props {
  component: React.ComponentType;
  path?: string;
  roles: TRole[];
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  if (isLoggedIn && userHasRequiredRole) {
    return <RouteComponent />;
  }

  if (isLoggedIn && !userHasRequiredRole) {
    return <AccessDenied />;
  }

  return <Navigate to="/login" />;
};
