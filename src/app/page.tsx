"use client";

import { Button } from "./components/Button";
import SelectTheme from "./components/SelectTheme";
import classNames from "classnames";
import { Input } from "./components/Input";
import Card from "./components/Card";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Home() {
  const { setTheme, mainBackground } = useContext(ThemeContext);

  return (
    <main
      className={classNames(
        mainBackground,
        "relative  min-h-screen min-w-screen flex flex-col items-center justify-start gap-24 pt-24"
      )}
    >
      <SelectTheme setTheme={setTheme} />

      <div className="mt-40 flex flex-col items-center justify-center gap-4">
        <Button />
        <Input placeholder="Input" />
        <Card className="h-60 w-40 relative" />
      </div>
    </main>
  );
}
