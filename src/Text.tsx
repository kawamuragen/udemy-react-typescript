import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// functional component
// 暗黙的にChildlrenを受け取る.ver18からはFCで含まないようになる
// それまではVFCで定義するようにする
export const Text: VFC<Props> = (props: Props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
