import { screen, render, fireEvent } from '@testing-library/react';
import Counter from './Counter';
describe('Counter', () => {
  it('component is visible', () => {
    render(<Counter />);
    const counter = screen.queryByTestId('counter');
    expect(counter).toBeVisible();
  });
  it('has Counter: as a title', () => {
    render(<Counter />);
    const title = screen.queryByText('Counter:');
    expect(title).toBeVisible();
  });
  it('has the counter value visible', () => {
    render(<Counter />);
    const value = screen.queryByTestId('counter-value');
    expect(value).toBeVisible();
    expect(value).toHaveTextContent('0');
  });
  it('has a substract button visible', () => {
    render(<Counter />);
    const substract = screen.queryByTestId('substract');
    expect(substract).toBeVisible();
  });
  it('has an add button visible', () => {
    render(<Counter />);
    const add = screen.queryByTestId('add');
    expect(add).toBeVisible();
  });
  it('changes value to -1 when clicking substract', async () => {
    render(<Counter />);
    const subtract = screen.queryByTestId('substract');
    const counterValue = screen.queryByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
    await fireEvent.click(subtract);
    expect(counterValue).toHaveTextContent('-1');
  });
  it('changes value to +1 when clicking add', async () => {
    render(<Counter />);
    const add = screen.queryByTestId('add');
    const counterValue = screen.queryByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
    await fireEvent.click(add);
    expect(counterValue).toHaveTextContent('1');
  });
});