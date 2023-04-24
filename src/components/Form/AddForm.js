import { useForm, FormProvider } from "react-hook-form";
import Styles from "../Form/Form.module.scss";

export default function Form({ open, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    open && (
      <FormProvider>
        <div className={Styles.position_form}>
          <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
            <div className={Styles.btn_position}>
              <button
                className={Styles.btn_close}
                type="button"
                onClick={onClose}
              >
                X
              </button>
            </div>

            <label className={Styles.label} htmlFor="">
              NAME SURNAME
            </label>
            <input
              type="text"
              className={Styles.input}
              {...register("NAME SURNAME", {
                required: true,
                max: 0,
                maxLength: 80,
              })}
            />

            <label className={Styles.label} htmlFor="">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              className={Styles.input}
              {...register("PHONE NUMBER", { required: true, maxLength: 12 })}
            />
            <label className={Styles.label} htmlFor="">
              EMAIL ADRESS
            </label>
            <input
              type="text"
              className={Styles.input}
              {...register("EMAIL ADRESS", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />

            <button type="submit" className={Styles.btn_submit}>
              I’M DONE
            </button>
          </form>
        </div>
      </FormProvider>
    )
  );
}
