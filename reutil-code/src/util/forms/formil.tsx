import { useFormik } from "formik";

const validate = (values: any) => {
  let errors: any = {};

  if (!values.firtName) {
    errors.firstName = "é necessario colocar algo...";
  } else {
    errors.firstName = "";
  }
  console.log(errors);
  return errors;
};

export const InputFormik = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      firtName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 1)); //
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nome">nome</label>
      <input
        id="firtName"
        name="firtName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firtName}
      />
      {formik.errors.firtName ? <div>error</div> : null}
      <label htmlFor="email">email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit" className="btn-pdr">
        enviar
      </button>
    </form>
  );
};
