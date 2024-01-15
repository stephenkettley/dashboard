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
      <InfoCard
        cardType="balance"
        amount="R3124,55"
        icon="WALLET"
        action="Top Up"
      />
      <InfoCard
        cardType="drivers"
        amount="1346"
        icon="LICENCE"
        action="+ Add Driver"
      />
      <InfoCard
        cardType="vehicles"
        amount="154"
        icon="CAR"
        action="+ Add Vehicle"
      />
      <Orders />
    </div>
  );
}

export default App;
