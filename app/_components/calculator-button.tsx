import { cn } from "@/lib/utils";

interface CalculatorButtonProps {
  onClick: () => void; // ボタンがクリックされた時に実行される関数
  className?: string;
  children?: React.ReactNode;
}

const CalculatorButton = ({
  onClick,
  className = "",
  children,
}: CalculatorButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "font-bold py-3 px-4 rounded-md transition-colors",
      className
    )}
  >
    {children}
  </button>
);

export default CalculatorButton;
