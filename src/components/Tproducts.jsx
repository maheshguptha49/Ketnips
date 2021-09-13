import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import styles from "./Home.module.css";
import axios from "axios";
import { ProductDetails } from "./Products";
import { useParams } from "react-router-dom";
export function Tproducts() {
  const [products, setProducts] = useState([]);
  const value = useParams();
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    GetData();
  }, [value]);
  console.log(value);
  function GetData() {
    if (value.category === "all") {
      console.log("all running");
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          let mcdata = res.data;
          setProducts(mcdata);
          setIsloading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsloading(false);
        });
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${value.category}`)
        .then((res) => {
          let mcdata = res.data;
          console.log(mcdata);
          setProducts(mcdata);
          setIsloading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsloading(false);
        });
    }
  }
  if (isloading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <Navbar />
      <div className={styles.products}>
        {products.map((item) => {
          return <ProductDetails key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
