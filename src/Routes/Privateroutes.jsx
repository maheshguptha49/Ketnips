import { useContext, useState } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";

export function PrivateRoute({ children, path, exact = false, state }) {
  const { isAuth } = useContext(AuthContext);
  // const [fakestate,setFakestate]=useState()
  // console.log(isAuth, "isAuth in private");
  const location = useLocation();
  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/loginpage",
          state: {
            from: state === "tproducts" ? location.pathname : state
          }
        }}
      />
    );
  }
  return (
    <>
      <Route exact path={path}>
        {children}
      </Route>
    </>
  );
}
