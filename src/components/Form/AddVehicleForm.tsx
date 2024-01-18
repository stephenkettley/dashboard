import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TAddVehicleSchema, addVehicleSchema } from "../../lib/types";
import styles from "./AddVehicleForm.module.scss";

const AddVehicleForm = ({ isOpen, addType, onClose }) => {
  if (!isOpen) return null;

  const [addedVehiclesCount, setAddedVehiclesCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddVehicleSchema>({ resolver: zodResolver(addVehicleSchema) });

  const onSubmit = async (data: TAddVehicleSchema) => {
    console.log(data);
    setAddedVehiclesCount((prevState) => prevState + 1);
    reset();
  };

  return (
    <div className={styles["add-vehicle-overlay"]}>
      <div className={styles["add-vehicles"]}>
        <header>
          <h1 className={styles["add-driver-heading"]}>{`Add ${
            addType.charAt(0).toUpperCase() + addType.slice(1)
          }`}</h1>
          <p className={styles["add-driver-description"]}>
            {`Please enter the details of all your company ${addType}s`}
          </p>
          <h3 className={styles["drivers-added-count"]}>{`${
            addType.charAt(0).toUpperCase() + addType.slice(1)
          }s added: ${addedVehiclesCount}`}</h3>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <input
              {...register("regNumber")}
              type="text"
              placeholder="Registration Number"
            ></input>
            {errors.regNumber && (
              <p
                className={styles["input-error"]}
              >{`${errors.regNumber.message}`}</p>
            )}
            <input
              {...register("colour")}
              type="text"
              placeholder="Colour"
            ></input>
            {errors.colour && (
              <p
                className={styles["input-error"]}
              >{`${errors.colour.message}`}</p>
            )}
            <input {...register("make")} type="text" placeholder="Make"></input>
            {errors.make && (
              <p
                className={styles["input-error"]}
              >{`${errors.make.message}`}</p>
            )}
            <input
              {...register("model")}
              type="text"
              placeholder="Model"
            ></input>
            {errors.model && (
              <p
                className={styles["input-error"]}
              >{`${errors.model.message}`}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles["add-driver-page-button"]} ${styles["add-driver-button"]}`}
          >
            {`+ Add ${addType.charAt(0).toUpperCase() + addType.slice(1)}`}
          </button>
        </form>

        <button
          className={`${styles["add-driver-page-button"]} ${styles["finish-button"]}`}
          onClick={() => onClose(addedVehiclesCount)}
        >
          Finish
        </button>
        <button
          className={`${styles["add-driver-page-button"]} ${styles["back-button"]}`}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddVehicleForm;
