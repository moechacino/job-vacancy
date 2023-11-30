import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const AuthRoute = (props) => {
  if (Cookies.get("token") === undefined) {
    alert("You are not logged in, please login first");
    return <Navigate to={"/login"} />;
  } else if (Cookies.get("token") !== undefined) {
    return props.children;
  }
};

export default AuthRoute;
