import { useFormik } from 'formik';


const validate = values => {
 const error = {};
  if(!values.nome) {
      erros.nome = 'é preciso colocar o seu nome!'
  } else if (values.nome.length > 14) {
      erros.nome = 'coloque um nome mais curto...'
  };
  if(!values.email) {
      error.email = 'é preciso colocar o seu email!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      error.email = 'formato de email invalido!'
  }
  
  return error;
}:

export const InputFormik = (): TSX.Element => {

const formik = useFormik({
 initialValues: {
  nome: '',
  email: '',
 },
 validate,
 onSubmit: values => {
  alert(JSON.stringify(values, null, 1));  // 
 }, 
});

console.log(formik.values.email)
 return (
  <form onSubmit={formik.handleSubmit} > 
    <label htmlFor="nome">nome</label>
    <input 
     id="nome" 
     name="nome" 
     type="text" 
     onChange={formik.handleChange} 
     value={formik.values.nome} />
   
    <label htmlFor="email">email</label>
    <input 
     id="email"  
     name="email" 
     type="email" 
     onChange={formik.handleChange} 
     value={formik.values.email} />
     
     <button type="submit" className="btn-pdr">enviar</button>
  </form>       
 )
}