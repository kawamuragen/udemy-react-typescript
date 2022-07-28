// import { Practice1 } from "./practices/Practice1";
// import { Practice2 } from "./practices/Practice2";
// import { Practice3 } from "./practices/Practice3";
// import { Practice4 } from "./practices/Practice4";
import { useState } from "react";
import { Todo } from "./Todo";
import axios from "axios";
import "./styles.css";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/User";

const user: User = {
  name: "じゃけえ",
  hobbies: ["映画", "ゲーム"]
};

export const App = () => {
  // 初期配列空[]
  // ステートの型を定義は＜＞で行う
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // 取得データに型定義をつける
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      {/* <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 /> */}
      <UserProfile user={user} />
      <br />
      <Text color="red" fontSize="18px" />
      <br />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
