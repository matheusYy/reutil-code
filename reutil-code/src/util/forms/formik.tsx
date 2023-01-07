import React from "react";
import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};

  if (!values.firtName) {
    errors = "error";
} if else (values.firtName.length < 1) {
    errors = 'coloque algo...'
};
  return errors;
};

console.log(validate);
export const InputFormik = (): TSX.Element => {
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
  console.log(formik.errors.firtName);
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
        name="user_email"
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
