import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";
import classNames from "classnames";

interface SelectThemeProps {
  className?: string;
  theme: string[];
  headerTheme: string[];
  buttonTheme: string[];
  showShadow?: boolean;
  showShadowButton?: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
}

export default function SelectTheme({
  theme,
  headerTheme,
  buttonTheme,
  showShadow,
  showShadowButton,
  setTheme,
}: SelectThemeProps) {
  return (
    <div className="absolute flex flex-col top-8 right-8 h-80 w-60">
      {showShadow && (
        <div className=" bg-retro-brown w-full h-full rounded-2xl border-2 border-retro-brown"></div>
      )}
      <div
        className={classNames(
          "absolute flex flex-col justify-center items-center gap-4  bottom-1 right-1 w-full h-full border-2",
          theme
        )}
      >
        <h3 className={classNames(headerTheme)}>Themes</h3>
        <Button
          theme={buttonTheme}
          showShadow={showShadowButton}
          text="Light"
          onClick={() => setTheme("light")}
        />
        <Button
          theme={buttonTheme}
          showShadow={showShadowButton}
          text="Dark"
          onClick={() => setTheme("dark")}
        />
        <Button
          theme={buttonTheme}
          showShadow={showShadowButton}
          text="Retro"
          onClick={() => setTheme("retro")}
        />
      </div>
    </div>
  );
}
