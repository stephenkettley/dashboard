import { useState } from "react";
import "./App.scss";
import AddDriverForm from "./components/Form/AddDriverForm";
import AddVehicleForm from "./components/Form/AddVehicleForm";
import InfoCard from "./components/InfoCard";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import BalanceIcon from "./components/UI/Icons/BalanceIcon";
import DriversIcon from "./components/UI/Icons/DriversIcon";
import VehiclesIcon from "./components/UI/Icons/VehiclesIcon";
import Welcome from "./components/Welcome";

// simulate figures from a database
const databaseDrivers = 1234;
const databaseVehicles = 156;

function App() {
  const [addDriverOpen, setAddDriverOpen] = useState(false);
  const [addVehicleOpen, setAddVehicleOpen] = useState(false);

  const [numberDrivers, setNumberDrivers] = useState(databaseDrivers);
  const [numberVehicles, setNumberVehicles] = useState(databaseVehicles);

  // this is the function to open the add driver modal
  function handleAddDriver() {
    setAddDriverOpen(true);
  }

  // this is the function to open the add vehicle modal
  function handleAddVehicle() {
    setAddVehicleOpen(true);
  }

  function handleCloseDriver(newDrivers: number) {
    setNumberDrivers((prevState) => prevState + newDrivers);
    setAddDriverOpen(false);
  }

  function handleCloseVehicle(newVehicles: number) {
    setNumberVehicles((prevState) => prevState + newVehicles);
    setAddVehicleOpen(false);
  }
  return (
    <>
      <AddDriverForm
        addType="driver"
        isOpen={addDriverOpen}
        onClose={handleCloseDriver}
      ></AddDriverForm>
      <AddVehicleForm
        addType="vehicle"
        isOpen={addVehicleOpen}
        onClose={handleCloseVehicle}
      ></AddVehicleForm>

      <div className="container">
        <Menu />
        <Welcome />
        <InfoCard
          cardType="balance"
          amount={`3154,54`}
          icon={BalanceIcon}
          action="Top Up"
        />
        <InfoCard
          cardType="drivers"
          amount={numberDrivers}
          icon={DriversIcon}
          action="+ Add Driver"
          onActionButtonClicked={handleAddDriver}
        />
        <InfoCard
          cardType="vehicles"
          amount={numberVehicles}
          icon={VehiclesIcon}
          action="+ Add Vehicle"
          onActionButtonClicked={handleAddVehicle}
        />
        <Orders />
      </div>
    </>
  );
}

export default App;
