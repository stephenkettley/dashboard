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
      <InfoCard cardType="balance" amount={1111} icon="WALLET" action="TOPUP" />
      <InfoCard
        cardType="drivers"
        amount={2222}
        icon="LICENCE"
        action="+DRIVER"
      />
      <InfoCard
        cardType="vehicles"
        amount={3333}
        icon="CAR"
        action="+VEHICLE"
      />
      <Orders />
    </div>
  );
}

export default App;
