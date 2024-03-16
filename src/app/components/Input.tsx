import classNames from "classnames";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const Input = ({ ...props }) => {
  const { showShadow, inputTheme } = useContext(ThemeContext);
  return (
    <div className="relative w-52 md:w-72 h-12">
      {showShadow && (
        <div className="absolute bg-retro-brown top-1 left-1 w-full h-full rounded-2xl"></div>
      )}
      <input className={classNames("relative", inputTheme)} {...props} />
    </div>
  );
};
