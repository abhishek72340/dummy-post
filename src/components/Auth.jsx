import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default Auth;
