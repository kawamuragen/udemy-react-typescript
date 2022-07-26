export const Practice4 = () => {
  // 税率を計算する関数
  // "strict": true, を有効にすると、暗黙的Any型は怒られる
  // "noImplicitAny": false, にすると暗黙的Anyは許される
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題４を実行</button>
    </div>
  );
};
