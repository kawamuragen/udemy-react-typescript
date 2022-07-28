import { VFC } from "react";
import { TodoType } from "./types/todo";

// 必須じゃないTypeの項目は「？」をつける
// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// };

// TodoTypeでインポートするが、必要な型のみを定義できるようにする
// Pick -> 必要なもののみを記載
// Omit -> 要らないもののみを記載
// props: Pick<TodoType, "userId" | "title" | "completed">
// props: Omit<TodoType, "id">
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}（ユーザ：${userId}）`}</p>;
};
