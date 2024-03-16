import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  const { buttonTheme, showShadow } = useContext(ThemeContext);

  return (
    <div className="relative w-24 md:w-32 h-12 md:h-14">
      {showShadow && (
        <div className="absolute bg-retro-brown top-1 left-1 w-full h-full rounded-2xl"></div>
      )}
      <button className={classNames("relative", buttonTheme)} {...props}>
        {text ? text : "Button"}
      </button>
    </div>
  );
};
