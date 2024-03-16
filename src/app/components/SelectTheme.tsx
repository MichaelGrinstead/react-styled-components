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
    <div className=" fixed  flex flex-col top-20 right-4 md:top-24 md:right-6 w-32 sm:w-36 md:w-40 z-10">
      {showShadow && (
        <div className="absolute bg-retro-brown h-full w-full rounded-2xl border-2 top-1 left-1 border-retro-brown"></div>
      )}
      <div
        className={classNames(
          "flex flex-col text-center p-2 border-2 z-10 md:gap-1",
          cardTheme
        )}
      >
        <h3 className={classNames(headerTheme)}>Themes</h3>
        <div className={`theme-transition ${isThemesOpen ? "open" : ""}`}>
          <div className="flex flex-col justify-center items-center gap-4 py-2">
            <Button text="Light" onClick={() => setTheme("light")} />
            <Button text="Dark" onClick={() => setTheme("dark")} />
            <Button text="Retro" onClick={() => setTheme("retro")} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button onClick={() => setIsThemesOpen(!isThemesOpen)}>
            {isThemesOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
    </div>
  );
}
