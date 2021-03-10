import { useForm } from "react-hook-form";
import { UserContext } from "../../store";
import { useContext } from "react";

export default function Signup() {
  const { signup } = useContext(UserContext);
  const { handleSubmit, register } = useForm();

  const handleRegisterSubmit = (formValues) => {
    signup(formValues.email, formValues.password, formValues.username);
  };

  return (
    <>
      <h2>Crea tu usuario!</h2>
      <form onSubmit={handleSubmit(handleRegisterSubmit)}>
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
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={register({ required: true })}
        />
        <button type="submit">Crear!</button>
      </form>
    </>
  );
}
