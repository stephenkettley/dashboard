import "./App.scss";
// import InfoCard from "./components/InfoCard";
// import Menu from "./components/Menu";
// import Orders from "./components/Orders";
// import BalanceIcon from "./components/UI/Icons/BalanceIcon";
// import DriversIcon from "./components/UI/Icons/DriversIcon";
// import VehiclesIcon from "./components/UI/Icons/VehiclesIcon";
// import Welcome from "./components/Welcome";
import AddDriver from "./components/AddDriver";
function App() {
  return (
    <>
      <AddDriver></AddDriver>
      <div className="container">
        {/* <Menu />
        <Welcome />
        <InfoCard
          cardType="balance"
          amount="R3124,55"
          icon={BalanceIcon}
          action="Top Up"
        />
        <InfoCard
          cardType="drivers"
          amount="1346"
          icon={DriversIcon}
          action="+ Add Driver"
        />
        <InfoCard
          cardType="vehicles"
          amount="154"
          icon={VehiclesIcon}
          action="+ Add Vehicle"
        />
        <Orders /> */}
      </div>
    </>
  );
}

export default App;
