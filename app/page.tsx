"use client";

import { useCalculator } from "./_hooks/useCalculator";
import { BUTTON_CONFIG, BUTTON_TYPES } from "./_constants/calculatorConstants";
import CalculatorButton from "./_components/calculator-button";
import DisplayValue from "./_components/display-value";

const Home = () => {
  const {
    display,
    handleNumberClick,
    handleOperationClick,
    handleEqualsClick,
    handleClearClick,
    handleDecimalClick,
    handlePercentClick,
    handleToggleSignClick,
  } = useCalculator();

  // ボタンクリック時のイベントハンドラ
  const handleButtonClick = (type: string, label: string) => {
    switch (type) {
      case BUTTON_TYPES.NUMBER:
        handleNumberClick(label);
        break;
      case BUTTON_TYPES.OPERATION:
        handleOperationClick(label);
        break;
      case BUTTON_TYPES.EQUAL:
        handleEqualsClick();
        break;
      case BUTTON_TYPES.CLEAR:
        handleClearClick();
        break;
      case BUTTON_TYPES.DECIMAL:
        handleDecimalClick();
        break;
      case BUTTON_TYPES.PERCENT:
        handlePercentClick();
        break;
      case BUTTON_TYPES.TOGGLE_SIGN:
        handleToggleSignClick();
        break;
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#333] p-6 shadow-xl rounded-lg">
        {/* 現在の計算結果を表示するコンポーネント */}
        <DisplayValue value={display} />
        <div className="grid grid-cols-4 gap-2">
          {/* BUTTON_CONFIGからボタンの設定を読み込み、それぞれをレンダリング */}
          {BUTTON_CONFIG.map((button, index) => (
            <CalculatorButton
              key={index}
              onClick={() => handleButtonClick(button.type, button.label)}
              className={button.className}
            >
              {button.label}
            </CalculatorButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
