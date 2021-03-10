import { useForm } from "react-hook-form";
import { useState } from "react";

function IdForm({ onFormSubmit }) {
  const { handleSubmit, register } = useForm();
  const [user, setUser] = useState(null);

  console.info(user);

  const handleFormSubmit = (formValues) => {
    //onFormSubmit(formValues);
    setUser(formValues);
  };
  return (
    <>
      <form data-testid="id-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <label data-testid="label-name">Nombre:</label>
        <input
          name="name"
          type="text"
          data-testid="input-name"
          ref={register()}
        />
        <label>Fecha de nacimiento:</label>
        <input
          name="birthdate"
          type="date"
          data-testid="input-birth"
          ref={register()}
        />
        <label>Dirección:</label>
        <input
          name="address"
          type="address"
          data-testid="input-address"
          ref={register()}
        />
        <button type="submit" data-testid="submit">
          Enviar
        </button>
      </form>
      {user ? (
        <div>
          <label>{user.name}</label>
          <label>{user.birthdate}</label>
          <label>{user.address}</label>
        </div>
      ) : null}
    </>
  );
}
export default IdForm;
