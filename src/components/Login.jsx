import { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import styles from "./Login.module.css";
import { AuthContext } from "../Contexts/Authcontext";
import { useHistory, useLocation } from "react-router-dom";
import { validateform } from "./Signup";

export function LoginPage() {
  const { handleLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const [showerror, setShowerror] = useState("");
  const history = useHistory();
  const location = useLocation();
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function getLogindatacheck(obj) {
    let arr = localStorage.getItem("users");
    if (arr === null) {
      setShowerror("no user found please register");
      return false;
      // arr=[]
    } else {
      arr = JSON.parse(arr);
    }
    let bool = false;
    let half = "";

    for (let i = 0; i < arr.length; i++) {
      if (obj.email === arr[i].email && obj.password === arr[i].password) {
        bool = true;
        break;
      } else if (obj.email === arr[i].email) {
        half = "password";
      } else if (obj.password === arr[i].password) {
        half = "email";
      }
    }

    if (!bool) {
      setShowerror("wrong credentials");
      if (half !== "") {
        setShowerror(`${half} is wrong`);
      }
      return false;
    } else {
      console.log("kk");

      return true;
    }
  }
  function handleSubmit() {
    let ans = validateform(formData);
    if (ans.length > 0) {
      setShowerror(`please fill in ${ans} details`);
      return;
    }
    // console.log(ans,"ansm")
    if (getLogindatacheck(formData)) {
      setShowerror("");
      handleLogin();
      history.push("/");
    }
  }
  return (
    <div>
      <Navbar />
      <div className={styles.login}>
        <div>LOGIN</div>
        <div>
          {" "}
          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />{" "}
        </div>
        <div>
          {" "}
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>LOGIN</button>
          <div>{showerror}</div>
        </div>
        <div className={styles.last}>
          <span
            onClick={() => {
              history.push("/signuppage");
            }}
          >
            Create Account
          </span>{" "}
          <span>*</span> <span>Forgot Password</span>
        </div>
      </div>
    </div>
  );
}
