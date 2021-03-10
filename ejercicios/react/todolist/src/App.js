import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

import Input from "./Input";
import Button from "./Button";
import List from "./List";



function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickAdd = () => {
    setTodoList([...todoList, { text: value, id: uuidv4() }]);
    handleClickClear();
  };
 
  const handleClickClear = () => {
    setValue("");
  };

  const handleClickRemove = (id) => {
    setTodoList(todoList.filter((element) => id !== element.id));
  };

  return (
    <div className="App">
      <h1>MY TO DO LIST</h1>
      <div className="container">
        <Input value={value} onChange={handleChange} />
        <Button onClick={handleClickAdd} disabled={!value} text="Add" />
        <Button onClick={handleClickClear} disabled={!value} text="Clear" />
      </div>
      <br></br>
      <List list={todoList} onClick={handleClickRemove}/>
    </div>
  );
}

export default App;
