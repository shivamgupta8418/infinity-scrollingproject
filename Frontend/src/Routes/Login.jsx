import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import LogOut from "./../Components/LogOut";
import LoginFields from "./../Components/LoginFields";

const Login = () => {
  const data = useContext(AuthContext);
  return (
    <div>
      {!!data.isLoggedIn ? <LogOut></LogOut> : <LoginFields></LoginFields>}
    </div>
  );
};

export default Login;
