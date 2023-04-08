import { useForm } from "react-hook-form";
import Styles from "../Form/Form.module.scss";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("NAME SURNAME", {
          pattern: /^[A-Za-z]+$/i,
          maxLength: 30,
        })}
      />
      <input type="number" {...register("PHONE NUMBER")} />
      <input {...register("EMAIL ADRESS")} />
      <button>I’M DONE</button>
    </form>
  );
}
