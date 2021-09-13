import { Route, Switch, useParams } from "react-router-dom";
import { Cart } from "../components/Cart";
import { LandingPage } from "../components/Landingpage";
import { LoginPage } from "../components/Login";
import { ProductPage } from "../components/ProductPage";
import { SignupPage } from "../components/Signup";
import { Thanq } from "../components/thanq";
import { Tproducts } from "../components/Tproducts";
import { PrivateRoute } from "./Privateroutes";

export function TotalRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/loginpage">
          <LoginPage />
        </Route>
        <Route exact path="/signuppage">
          <SignupPage />
        </Route>
        <PrivateRoute exact path="/tproducts/:category" state="/tproducts">
          <Tproducts />
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/tproducts/indproduct/:id"
          state="/tproducts/:id"
        >
          <ProductPage />
        </PrivateRoute>
        <PrivateRoute exact path="/cart">
          <Cart />
        </PrivateRoute>
        <Route exact path="/thanqpage">
          <Thanq />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

function ErrorPage() {
  const values = useParams();
  let p;
  for (let key in values) {
    p = key;
  }
  return (
    <div>
      Error 404 page not found
      {p ? " you  were looking for" + p : ""}
    </div>
  );
}
