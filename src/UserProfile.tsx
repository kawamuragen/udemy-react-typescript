import { VFC } from "react";
import { User } from "./types/User";

type Props = {
  user: User;
};

// オプショナルチェイニング
// 「hobbies?」の？が無いと配列が来ないときにjoin
// しようとして落ちてしまう。
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
