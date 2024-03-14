import { useContext } from "react";
import { Button } from "./Button";
import classNames from "classnames";
import { Input } from "./Input";
import { ThemeContext } from "../context/ThemeContext";

export default function Card({ className }: { className: string }) {
  const { cardTheme, headerTheme, showShadow } = useContext(ThemeContext);
  return (
    <div className={className}>
      {showShadow && (
        <div className=" absolute bg-retro-brown w-full h-full top-1 left-1 rounded-2xl border-2 border-retro-brown"></div>
      )}
      <div
        className={classNames(
          "absolute flex flex-col justify-start items-center gap-6  bottom-1 right-1 w-full h-full border-2 p-6",
          cardTheme
        )}
      >
        <h3 className={classNames(headerTheme)}>Card</h3>
        <Input placeholder="Input"></Input>
        <Input placeholder="Input"></Input>
        <div className="mt-6">
          <Button text="Button" />
        </div>
      </div>
    </div>
  );
}
