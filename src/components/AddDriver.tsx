import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./AddDriver.module.scss";

const addDriverSchema = z.object({
  firstName: z.string().min(1, "*First name is required"),
  lastName: z.string().min(1, "*First name is required"),
  phoneNumber: z
    .string()
    .max(10, "*Please enter a 10-digit phone number.")
    .min(10, "*Please enter a 10-digit phone number."),
  idNumber: z
    .string()
    .max(13, "*Please enter a 13-digit ID number.")
    .min(13, "*Please enter a 13-digit ID number."),
});

type TAddDriverSchema = z.infer<typeof addDriverSchema>;

const AddDriver = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAddDriverSchema>({ resolver: zodResolver(addDriverSchema) });

  const onSubmit = async (data: TAddDriverSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles["add-drivers"]}>
      <header>
        <h1 className={styles["add-driver-heading"]}>Add Driver</h1>
        <p className={styles["add-driver-description"]}>
          Please enter the details of all your company drivers
        </p>
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
          className={`${styles["add-driver-page-button"]} ${styles["add-driver-button"]}`}
        >
          + Add Driver
        </button>
      </form>

      <button
        className={`${styles["add-driver-page-button"]} ${styles["finish-button"]}`}
      >
        Finish
      </button>
      <button
        className={`${styles["add-driver-page-button"]} ${styles["back-button"]}`}
      >
        Back
      </button>
    </div>
  );
};

export default AddDriver;
