import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ActionButtonProps {
  text?: string;
  type?: "button" | "submit"
  disabled?: boolean;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text = "See All",
  type = "button",
  disabled = false,
  onClick,
}) => {
  const classBtn = `inline-flex items-center gap-2 group bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${disabled ? '' : 'cursor-pointer'}`
  return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={classBtn}
      >
        {text}
        <ArrowUpRight
          className={`w-5 h-5 transform transition-transform duration-300 ease-out ${
            !disabled ? "group-hover:translate-x-1 group-hover:-translate-y-1" : ""
          }`}
        />
      </button>
  );
};

export default ActionButton;
