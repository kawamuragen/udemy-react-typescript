export const Practice2 = () => {
  // 税率を計算する関数
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
    // return total.toString(); //これはエラーになる
  };

  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題２を実行</button>
    </div>
  );
};
