import { LandingPage } from "./components/Landingpage";
import { LoginPage } from "./components/Login";
import { SignupPage } from "./components/Signup";
import { Tproducts } from "./components/Tproducts";
import { TotalRoutes } from "./Routes/Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TotalRoutes />
    </div>
  );
}
