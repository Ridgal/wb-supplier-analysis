import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  // const isLogin = !!localStorage.getItem('token');
  const isLogin = true;
  console.log(1)
  console.log(isLogin)

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [navigate, isLogin]);

  return (
    <>{children}</>
  )
};

type ProtectedRouteProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export { ProtectedRoute };
