import { createContext, useState } from "react";
var f = localStorage.getItem("isAuth");
if (f === null || f === "false") {
  f = false;
} else if (f === "true") {
  f = true;
}
console.log("f", f);

export const AuthContext = createContext({
  isAuth: true,
  handleLogin: () => {}
});
export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(f);
  function handleLogin() {
    localStorage.setItem("isAuth", "true");
    setIsAuth(true);
  }
  function handleLogout() {
    localStorage.setItem("isAuth", "false");
    setIsAuth(false);
  }
  let obj = { isAuth, handleLogin, handleLogout };
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
}
