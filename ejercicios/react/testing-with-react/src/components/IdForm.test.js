import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import IdForm from './IdForm';
describe('IdForm', () => {
  it('component is visible', () => {
    render(<IdForm />);
    const idForm = screen.queryByTestId('id-form');
    expect(idForm).toBeVisible();
  });
  it('has a name input field', () => {
    render(<IdForm />);
    const label = screen.queryByText('Nombre:');
    expect(label).toBeVisible();
    const inputName = screen.queryByTestId('input-name');
    expect(inputName).toBeVisible();
    expect(inputName).toHaveAttribute('type', 'text');
  });
  it('has a birthdate input field', () => {
    render(<IdForm />);
    const label = screen.queryByText('Fecha de nacimiento:');
    expect(label).toBeVisible();
    const inputBirth = screen.queryByTestId('input-birth');
    expect(inputBirth).toBeVisible();
    expect(inputBirth).toHaveAttribute('type', 'date');
  });
  it('has an address input field', () => {
    render(<IdForm />);
    const label = screen.queryByText('Dirección:');
    expect(label).toBeVisible();
    const inputAddress = screen.queryByTestId('input-address');
    expect(inputAddress).toBeVisible();
    expect(inputAddress).toHaveAttribute('type', 'address');
  });
  it('has a submit button', () => {
    render(<IdForm />);
    const submit = screen.queryByTestId('submit');
    expect(submit).toBeVisible();
  });
  it('form submits the correct information', async () => {
    const onFormSubmit = jest.fn();
    render(<IdForm onFormSubmit={(val) => onFormSubmit(val)} />);
    const name = screen.queryByTestId('name-value');
    expect(name).not.toBeInTheDocument();
    const birthdate = screen.queryByTestId('birthdate-value');
    expect(birthdate).not.toBeInTheDocument();
    const address = screen.queryByTestId('address-value');
    expect(address).not.toBeInTheDocument();
    const inputName = screen.queryByTestId('input-name');
    await fireEvent.change(inputName, {
      target: { value: 'pepe' },
    });
    const inputBirth = screen.queryByTestId('input-birth');
    await fireEvent.change(inputBirth, {
      target: { value: '2020-01-01' },
    });
    const inputAddress = screen.queryByTestId('input-address');
    await fireEvent.change(inputAddress, {
      target: { value: 'Paseo Recoletos, The Bridge' },
    });
    const submit = screen.queryByTestId('submit');
    await fireEvent.click(submit);
    await waitFor(() => {
      expect(onFormSubmit).toHaveBeenCalled();
      expect(onFormSubmit).toHaveBeenCalledWith({
        name: 'pepe',
        birthdate: '2020-01-01',
        address: 'Paseo Recoletos, The Bridge',
      });
    });
    // Vamos a modificar el component IdForm para que después de hacer Submit,
    // sean visibles estos campos que buscamos y tengan los valores que hemos metido al Form.
    // Es posible que haya que cambiar un poco la función de submit.
    expect(name).toBeVisible();
    expect(name).toHaveTextContent('pepe');
    expect(address).toBeVisible();
    expect(address).toHaveTextContent('Paseo Recoletos, The Bridge');
    expect(birthdate).toBeVisible();
    expect(birthdate).toHaveTextContent('2020-01-01');
  });
});