import { useState } from "react";
import { Navbar } from "./Navbar";
import styles from "./Login.module.css";
import { useHistory, useLocation } from "react-router-dom";
export function validateform(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj[key].length === 0) {
      arr.push(key);
    }
  }
  // console.log(obj)
  return arr.join(", ");
}
export function SignupPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const [showerror, setShowerror] = useState("");
  const history = useHistory();
  const location = useLocation();
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    console.log(formData);
    let ans = validateform(formData);
    console.log(ans);
    if (ans.length > 0) {
      setShowerror(`please fill in ${ans} details`);
    } else {
      let arr = localStorage.getItem("users");
      if (arr === null) {
        arr = [];
      } else {
        arr = JSON.parse(arr);
      }
      arr.push(formData);
      localStorage.setItem("users", JSON.stringify(arr));
      history.push("/loginpage");
    }
  }
  return (
    <div>
      <Navbar />
      <div className={styles.login}>
        <div>CREATE ACCOUNT</div>
        <div>
          {" "}
          <input
            type="text"
            onChange={handleChange}
            name="firstname"
            placeholder="First Name"
          />{" "}
        </div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>SIGNUP</button>
          <div>{showerror}</div>
        </div>
        <div className={styles.last}>
          <span
            onClick={() => {
              history.push("/loginpage");
            }}
          >
            Login
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
