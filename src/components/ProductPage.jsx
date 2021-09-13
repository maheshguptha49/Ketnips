import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import styles from "./ProductPage.module.css";
export function ProductPage() {
  const value = useParams();
  const [product, setProduct] = useState("");
  const [descs, setDescs] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    getDataofProduct();
  }, []);
  function seperate(data) {
    let f = data.split(".");
    f = f.filter((item) => item !== "");
    setDescs(f);
    console.log(f);
  }
  function getDataofProduct() {
    axios
      .get(`https://fakestoreapi.com/products/${value.id}`)
      .then((res) => {
        let mcdata = res.data;
        setProduct(mcdata);
        // console.log(product)
        seperate(mcdata.description);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }
  function postTocart() {
    let arr = localStorage.getItem("cart");
    if (arr === null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    arr.push(product);
    localStorage.setItem("cart", JSON.stringify(arr));
  }

  if (isloading) {
    return <div>...loading</div>;
  }
  return (
    <>
      <Navbar />
      <div className={styles.product1}>
        <div>
          {" "}
          <img src={product.image} alt="" />{" "}
        </div>
        <div>
          <p>{product.title}</p>
          <ul>
            {descs.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <p>${product.price}</p>
          <p>
            {" "}
            <button onClick={postTocart}>Add to Cart</button>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
