import { Link, Redirect } from "react-router-dom";
import styles from "./Home.module.css";
export function ProductDetails(props) {
  let { image, price, title, id, description } = props;
 
  return (
    <>
      <Link to={`/tproducts/indproduct/${id}`}>
    <div className={styles.indproduct}>
      <div><img src={image} alt=""/></div>
      <div>
        <p>{title}</p>
        <p>${price}</p> 
       </div>
        </div>
        </Link>
      </>
  );
}
