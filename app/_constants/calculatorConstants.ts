// `OPERATIONS`オブジェクト: 計算機でサポートされる算術演算を定義します。
// 各プロパティは、演算子の表示用の文字列を保持します。
const OPERATIONS = {
  ADD: "+", // 足し算
  SUBTRACT: "-", // 引き算
  MULTIPLY: "x", // 掛け算
  DIVIDE: "÷", // 割り算
};

// `BUTTON_TYPES`オブジェクト: 計算機のボタンの種類を定義します。
// これにより、ボタンの機能（数字、演算子、その他の機能）を区別できます。
export const BUTTON_TYPES = {
  NUMBER: "number", // 数字
  OPERATION: "operation", // 演算子
  CLEAR: "clear", // クリア（AC）
  EQUAL: "equal", // 等号（=）
  DECIMAL: "decimal", // 小数点（.）
  PERCENT: "percent", // パーセント（%）
  TOGGLE_SIGN: "toggleSign", // 正負の切り替え（+/-）
};

// `BUTTON_CONFIG`配列: 計算機のUIに表示されるボタンの設定を定義します。
// 各ボタンは`type`、`label`、および`className`プロパティを持ちます。
// `type`はボタンの機能を、`label`はボタン上に表示されるテキストを、
// `className`はスタイルを定義します。
export const BUTTON_CONFIG = [
  {
    type: BUTTON_TYPES.CLEAR,
    label: "AC",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.TOGGLE_SIGN,
    label: "+/-",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.PERCENT,
    label: "%",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.OPERATION,
    label: OPERATIONS.DIVIDE,
    className: "bg-[#ff9500] text-[#f1f1f1] hover:bg-[#ffa726]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "7",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "8",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "9",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.OPERATION,
    label: OPERATIONS.MULTIPLY,
    className: "bg-[#ff9500] text-[#f1f1f1] hover:bg-[#ffa726]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "4",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "5",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "6",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.OPERATION,
    label: OPERATIONS.SUBTRACT,
    className: "bg-[#ff9500] text-[#f1f1f1] hover:bg-[#ffa726]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "1",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "2",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "3",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.OPERATION,
    label: OPERATIONS.ADD,
    className: "bg-[#ff9500] text-[#f1f1f1] hover:bg-[#ffa726]",
  },
  {
    type: BUTTON_TYPES.NUMBER,
    label: "0",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666] col-span-2",
  },
  {
    type: BUTTON_TYPES.DECIMAL,
    label: ".",
    className: "bg-[#555] text-[#f1f1f1] hover:bg-[#666]",
  },
  {
    type: BUTTON_TYPES.EQUAL,
    label: "=",
    className: "bg-[#ff9500] text-[#f1f1f1] hover:bg-[#ffa726]",
  },
];
