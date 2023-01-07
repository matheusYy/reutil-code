//import methods
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
//style
import "./scss/formik.css";
//animation itens
import { Checkted, Reload } from "./icones_animation/itens";
//create object in Yup
const SignupSign = Yup.object().shape({
  name: Yup.string()
    .min(3, "muito curto...")
    .max(45, "limite de caracteres...")
    .required("é preciso preencher esse campo"),
  email: Yup.string().email("email invalido").required("coloque o seu email!"),
});

interface formsValues {
  name: string;
  email: string;
}
export const InputFormik: React.FC = () => {
  const [reload, setReload] = useState(false);
  const initialValues: formsValues = { name: "", email: "" };
  const sleep = (ms: any) => new Promise((r) => setInterval(r, ms));

  async function animate() {
    try {
      await setReload(true);
      await setTimeout(() => {
        window.alert("ALGO");
        setReload(false);
      }, 800);
    } catch (e) {
      return e;
    }
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSign}
        onSubmit={async (value, action) => {
          try {
            await animate();
            action.setSubmitting(true);
            window.alert(action.setSubmitting);
          } catch (a) {
            return a;
          }
        }}
      >
        {({ isValid, dirty, handleSubmit }) => (
          <Form
            autoComplete="on"
            noValidate
            action="https://formsubmit.co/matheusrodrigues.yy7@gmail.com"
            method="post"
            onSubmit={() => animate()}
          >
            <label htmlFor="nome">nome</label>
            <Field id={"nome"} name={"name"} placeholder={"seu nome..."} />
            <ErrorMessage name={"name"} />
            <label htmlFor="email">email</label>
            <Field
              id={"email"}
              name="email"
              type="email"
              placeholder={"seu email..."}
            />
            <ErrorMessage name={"email"} />
            <button
              type="submit"
              className="submit-btn-interfac"
              disabled={!isValid || !dirty}
            >
              enviar
              {reload == true ? <Reload /> : <Checkted />}
            </button>
            <input type="hidden" name="_next" value="" />
            <input type="hidden" name="_template" value="table" />
          </Form>
        )}
      </Formik>
    </>
  );
};
