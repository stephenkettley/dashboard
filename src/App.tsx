import "./App.scss";
import InfoCard from "./components/InfoCard";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="container">
      <Menu />
      <Welcome />
      <InfoCard cardType="balance" />
      <InfoCard cardType="drivers" />
      <InfoCard cardType="vehicles" />
      <Orders />
    </div>
  );
}

export default App;
