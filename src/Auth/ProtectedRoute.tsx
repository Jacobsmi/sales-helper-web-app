import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = undefined;
  return user ? <>{children}</> : <Navigate to="/" />;
};
export default ProtectedRoute;
