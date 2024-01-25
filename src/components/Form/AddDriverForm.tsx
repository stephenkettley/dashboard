import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TAddDriverSchema, addDriverSchema } from "../../lib/types";
import styles from "./AddDriverForm.module.scss";

const AddDriverForm = ({ isOpen, addType, onClose }) => {
  if (!isOpen) return null;

  const [addedDriversCount, setAddedDriversCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddDriverSchema>({ resolver: zodResolver(addDriverSchema) });

  const onSubmit = async (data: TAddDriverSchema) => {
    console.log(data);
    setAddedDriversCount((prevState) => prevState + 1);
    reset();
  };
  return (
    <div className={styles["add-driver-overlay"]}>
      <div className={styles["add-drivers"]}>
        <header>
          <h1 className={styles["add-driver-heading"]}>{`Add ${
            addType.charAt(0).toUpperCase() + addType.slice(1)
          }`}</h1>
          <p className={styles["add-driver-description"]}>
            {`Please enter the details of all your company ${addType}s`}
          </p>
          <h3 className={styles["drivers-added-count"]}>{`${
            addType.charAt(0).toUpperCase() + addType.slice(1)
          }s added: ${addedDriversCount}`}</h3>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
            ></input>
            {errors.firstName && (
              <p
                className={styles["input-error"]}
              >{`${errors.firstName.message}`}</p>
            )}
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
            ></input>
            {errors.lastName && (
              <p
                className={styles["input-error"]}
              >{`${errors.lastName.message}`}</p>
            )}
            <input
              {...register("phoneNumber")}
              type="text"
              placeholder="Phone Number"
            ></input>
            {errors.phoneNumber && (
              <p
                className={styles["input-error"]}
              >{`${errors.phoneNumber.message}`}</p>
            )}
            <input
              {...register("idNumber")}
              type="text"
              placeholder="ID Number"
            ></input>
            {errors.idNumber && (
              <p
                className={styles["input-error"]}
              >{`${errors.idNumber.message}`}</p>
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
          onClick={() => onClose(addedDriversCount)}
        >
          Finish
        </button>
        <button
          className={`${styles["add-driver-page-button"]} ${styles["back-button"]}`}
          onClick={() => onClose(addedDriversCount)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddDriverForm;
