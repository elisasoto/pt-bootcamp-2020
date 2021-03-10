import Card from "./Card";

export default function List({ list, onClick }) {
  return (
    <div className="todo-container">
      {list.map((todo) => (
        <Card key={todo.id} todo={todo} onClick={onClick} />
      ))}
    </div>
  );
}