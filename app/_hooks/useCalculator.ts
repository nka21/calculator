import { useState } from "react";

/**
 * カスタムフックを定義し、計算機の状態管理とロジックを提供します。
 */
export const useCalculator = () => {
  // 表示される値を管理します。
  const [display, setDisplay] = useState("0");
  // 前回の計算結果を保持します。
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  // 現在選択されている演算子を保持します。
  const [operation, setOperation] = useState<string | null>(null);
  // 表示をリセットするかどうかを管理します。
  const [resetDisplay, setResetDisplay] = useState(false);

  // 数字ボタンがクリックされたときの処理です。
  const handleNumberClick = (num: string) => {
    if (display === "0" || resetDisplay) {
      setDisplay(num);
      setResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };

  // 演算子ボタンがクリックされたときの処理です。
  const handleOperationClick = (op: string) => {
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setResetDisplay(true);
  };

  // 等号ボタンがクリックされたときの処理です。計算を実行します。
  const handleEqualsClick = () => {
    if (previousValue !== null && operation !== null) {
      const current = parseFloat(display);
      let result: number | string;
      switch (operation) {
        case "+":
          result = previousValue + current;
          break;
        case "-":
          result = previousValue - current;
          break;
        case "x":
          result = previousValue * current;
          break;
        case "÷":
          result = current !== 0 ? previousValue / current : "Error";
          break;
        default:
          return;
      }
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
    }
  };

  // クリアボタンがクリックされたときの処理です。状態を初期化します。
  const handleClearClick = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
  };

  // 小数点ボタンがクリックされたときの処理です。
  const handleDecimalClick = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  // パーセントボタンがクリックされたときの処理です。現在の値をパーセントに変換します。
  const handlePercentClick = () => {
    const value = parseFloat(display) / 100;
    setDisplay(value.toString());
  };

  // 正負の切り替えボタンがクリックされたときの処理です。表示されている値の符号を反転します。
  const handleToggleSignClick = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  // フックから提供される状態と関数を返します。
  return {
    display,
    handleNumberClick,
    handleOperationClick,
    handleEqualsClick,
    handleClearClick,
    handleDecimalClick,
    handlePercentClick,
    handleToggleSignClick,
  };
};
