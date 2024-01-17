import { useState } from "react";
import "./App.scss";
import AddDriverForm from "./components/AddDriverForm";
import AddVehicleForm from "./components/AddVehicleForm";
import InfoCard from "./components/InfoCard";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import BalanceIcon from "./components/UI/Icons/BalanceIcon";
import DriversIcon from "./components/UI/Icons/DriversIcon";
import VehiclesIcon from "./components/UI/Icons/VehiclesIcon";
import Welcome from "./components/Welcome";
function App() {
  const [addDriver, setAddDriver] = useState(false);
  const [addVehicle, setAddVehicle] = useState(false);
  const [mainDashboard, setMainDashboard] = useState(true);

  function handleAddDriverClick() {
    setAddDriver(true);
    setMainDashboard(false);
  }

  function handleAddVehicleClick() {
    setAddVehicle(true);
    setMainDashboard(false);
  }

  function handleFinishClick() {
    setAddDriver(false);
    setAddVehicle(false);
    setMainDashboard(true);
  }
  return (
    <>
      {addDriver && (
        <AddDriverForm
          addType="driver"
          onFinishClick={handleFinishClick}
        ></AddDriverForm>
      )}
      {addVehicle && (
        <AddVehicleForm
          addType="vehicle"
          onFinishClick={handleFinishClick}
        ></AddVehicleForm>
      )}
      {mainDashboard && (
        <div className="container">
          <Menu />
          <Welcome />
          <InfoCard
            cardType="balance"
            amount={`3154,54`}
            icon={BalanceIcon}
            action="Top Up"
            onAddDriverClick={handleAddDriverClick}
          />
          <InfoCard
            cardType="drivers"
            amount={1346}
            icon={DriversIcon}
            action="+ Add Driver"
            onAddDriverClick={handleAddDriverClick}
          />
          <InfoCard
            cardType="vehicles"
            amount={154}
            icon={VehiclesIcon}
            action="+ Add Vehicle"
            onAddDriverClick={handleAddVehicleClick}
          />
          <Orders />
        </div>
      )}
    </>
  );
}

export default App;
