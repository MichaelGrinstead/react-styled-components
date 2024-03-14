import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Button } from "./Button";
import classNames from "classnames";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

interface SelectThemeProps {
  setTheme: Dispatch<SetStateAction<string>>;
}

export default function SelectTheme({ setTheme }: SelectThemeProps) {
  const { cardTheme, showShadow, headerTheme } = useContext(ThemeContext);
  const [isThemesOpen, setIsThemesOpen] = useState(false);

  return (
    <div className=" absolute flex flex-col top-6 right-10 w-40">
      {showShadow && (
        <div className="absolute bg-retro-brown h-full w-full rounded-2xl border-2 top-2 left-2 border-retro-brown"></div>
      )}
      <div
        className={classNames(
          "flex flex-col gap-2 text-center p-2 border-2 z-10",
          cardTheme
        )}
      >
        <h3 className={classNames(headerTheme)}>Themes</h3>
        {isThemesOpen && (
          <div className="flex flex-col justify-center items-center gap-4">
            <Button text="Light" onClick={() => setTheme("light")} />
            <Button text="Dark" onClick={() => setTheme("dark")} />
            <Button text="Retro" onClick={() => setTheme("retro")} />
          </div>
        )}
        <div>
          <button onClick={() => setIsThemesOpen(!isThemesOpen)}>
            {isThemesOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
    </div>
  );
}
