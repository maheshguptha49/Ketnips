import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";
import styles from "./Navbar.module.css";

export function Navbar() {
  const { isAuth, handleLogout } = useContext(AuthContext);

  return (
    <div>
      <div className={styles.Navbar}>
        <Link to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/2028/6907/files/Ketnipz_Header_550x_dd3e502e-9e2e-4ad6-8c4d-e7cadd42b578_130x.gif?v=1592267404"
            alt="logo"
          />
        </Link>
        <div>
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link to="/tproducts/all">SHOP ALL</Link>
          </div>
          <div>
            {" "}
            <Link to="/tproducts/men's%20clothing">MENS WEAR</Link>
          </div>
          <div>
            {" "}
            <Link to="/tproducts/women's%20clothing">WOMENS WEAR</Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/tproducts/jewelery">JEWELERY</Link>{" "}
          </div>
          <div>
            <Link to="/tproducts/electronics">ELECTRONICS</Link>
          </div>
          <div>
            <Link to="/cart">CART</Link>
          </div>
          {isAuth === true ? (
            <div>
              <Link
                to="/"
                onClick={() => {
                  alert("logoout successfull");
                  handleLogout();
                }}
              >
                LOGOUT
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/loginpage">LOGIN</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
