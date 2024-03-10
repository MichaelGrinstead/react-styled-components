import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";
import classNames from "classnames";
import { Input } from "./Input";

interface CardProps {
  className?: string;
  selectedTheme: string;
  theme: string[];
  headerTheme: string[];
  buttonTheme: string[];
  inputTheme: string[];
  showShadow?: boolean;
  showShadowButton?: boolean;
}

export default function Card({
  className,
  selectedTheme,
  theme,
  headerTheme,
  buttonTheme,
  inputTheme,
  showShadow,
  showShadowButton,
}: CardProps) {
  return (
    <div className={className}>
      {showShadow && (
        <div className=" absolute bg-retro-brown w-full h-full top-1 left-1 rounded-2xl border-2 border-retro-brown"></div>
      )}
      <div
        className={classNames(
          "absolute flex flex-col justify-start items-center gap-6  bottom-1 right-1 w-full h-full border-2 p-6",
          theme
        )}
      >
        <h3 className={classNames(headerTheme)}>Card</h3>
        <Input
          theme={inputTheme}
          showShadow={selectedTheme === "retro"}
          placeholder="Input..."
        ></Input>
        <Input
          theme={inputTheme}
          showShadow={selectedTheme === "retro"}
          placeholder="Input..."
        ></Input>
        <div className="mt-6">
          <Button
            theme={buttonTheme}
            showShadow={showShadowButton}
            text="Button"
          />
        </div>
      </div>
    </div>
  );
}
