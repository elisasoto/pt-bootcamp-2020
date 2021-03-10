import { useForm } from 'react-hook-form';
import { UserContext } from '../../store';
import {useContext} from 'react';


export default function Signin (){
    const {login } = useContext(UserContext)

    const { handleSubmit, register } = useForm();

    const handleFormSubmit = (formValues) => {
        login(formValues.email, formValues.password);
      };

    return (
        <>
                <h2>Iniciar sesión!</h2>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={register({ required: true })}
                  />
                  <br />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    ref={register({ required: true })}
                  />
                  <br />
                  <button type="submit">¡Enviar! 🚀</button>
                </form>
              </>
    )
}