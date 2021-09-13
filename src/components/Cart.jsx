import { useEffect, useState } from "react";
import { ProductDetails } from "./Products";
import styles from "./Home.module.css";
import { Navbar } from "./Navbar";
import { Link, useHistory } from "react-router-dom";

export function Cart() {
  const [cartData, setCartData] = useState([]);
  const [price, setPrice] = useState(0);
  const history = useHistory();
  useEffect(() => {
    getcartDatafromls();
  }, []);
  function getcartDatafromls() {
    let arr = localStorage.getItem("cart");
    if (arr !== null) {
      arr = JSON.parse(arr);
      setCartData(arr);
      let price1 = 0;
      for (let i = 0; i < arr.length; i++) {
        price1 += arr[i].price;
      }
      setPrice(price1);
    }
  }
  return (
    <div>
      <Navbar />
      <div className={styles.products}>
        {cartData.map((item) => {
          return <ProductDetails {...item} />;
        })}
      </div>
      <div style={{ textAlign: "center" }}>Total payable Price ${price}</div>
      <div style={{ width: "200px", margin: "20px auto" }}>
        <button
          onClick={() => {
            if (cartData.length > 0) {
              history.push("/thanqpage");
            } else {
              alert("please add something in cart and checkout");
            }
          }}
          className={styles.checkoutbutton}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
