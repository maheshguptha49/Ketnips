import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import styles from "./Home.module.css";
import axios from "axios";
import { ProductDetails } from "./Products";
export function Home() {
  const images = [
    "https://cdn.shopify.com/s/files/1/2028/6907/files/Ketnipz_Summer_Ad_2021_Banner_2048x.gif?v=1625867600",
    "https://cdn.shopify.com/s/files/1/2028/6907/files/Cosy_Banner_3_2048x.gif?v=1622572252",
    "https://cdn.shopify.com/s/files/1/2028/6907/files/Cozy_Banner_2_d988295a-7532-4616-a808-57cc0d91e14c_2048x.gif?v=1622572308"
  ];
  const [image, setImage] = useState(0);
  const [products, setProducts] = useState([]);
  function handleImage(x) {
    let f = image + x;
    if (f === -1) {
      f = images.length - 1;
    } else if (f === images.length) {
      f = 0;
    }
    setImage(f);
  }
  useEffect(() => {
    GetData();
  }, []);
  function GetData() {
    axios.get("https://fakestoreapi.com/products?limit=8").then((res) => {
      let mcdata = res.data;
      setProducts(mcdata);
    })
    .catch((err)=>{
       console.log(err)
    })
    
  }
  return (
    <div>
      <Navbar />
      <div className={styles.banner}>
        <img src={images[image]} width="101%" alt="" />
        <p
          className={styles.prev}
          onClick={() => {
            handleImage(-1);
          }}
        >
          <FaLessThan />
        </p>
        <p
          onClick={() => {
            handleImage(+1);
          }}
        >
          {" "}
          <FaGreaterThan />
        </p>
      </div>
      <div className={styles.products}>
        {products.map((item) => {
          return <ProductDetails key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
