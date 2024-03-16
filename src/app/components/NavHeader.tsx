import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface NavHeaderProps {
  text?: string;
}

export const NavHeader = ({ text }: NavHeaderProps) => {
  const { navHeaderTheme, showShadow } = useContext(ThemeContext);

  return (
    <div className="relative flex flex-col justify-center items-center text-center w-56 md:w-[340px] h-10 md:h-14">
      {showShadow && (
        <div className="absolute bg-retro-brown top-1 left-1 w-full h-full rounded-2xl"></div>
      )}
      <div className={classNames("relative", navHeaderTheme)}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};
