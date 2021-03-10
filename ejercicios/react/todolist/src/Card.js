import Button from "./Button";

export default function Card({ todo, onClick }) {
  return (
    <div key={todo.id} className="todo-card">
      <label>{todo.text}</label>
      <Button onClick={onClick} id={todo.id} text="x" type="deleteButton" />
    </div>
  );
}
