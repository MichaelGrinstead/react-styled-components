"use client";

import { useState } from "react";
import { Button } from "./components/Button";
import SelectTheme from "./components/SelectTheme";
import classNames from "classnames";
import { Input } from "./components/Input";
import Card from "./components/Card";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [theme, setTheme] = useState("light");

  const mainBackground =
    theme == "retro"
      ? "bg-retro-blue"
      : theme == "light"
      ? "bg-platinum"
      : theme == "dark"
      ? "bg-black"
      : "bg-white";

  const themeRetro = [
    barlow.className,
    "border-retro-brown",
    "bg-retro-yellow",
    "text-retro-brown",
    "border border-2",
    "text-xl italic font-bold",
    "px-4",
    "rounded-2xl",
    "w-full h-full",
    "placeholder-retro-brown",
  ];

  const themeLight = [
    "border-frenchGrey",
    "bg-antiFlashWhite",
    "text-night",
    "border border-2",
    "text-md font-semibold ",
    "rounded-xl",
    "p-4",
    "w-full h-full",
    "placeholder-onyx",
    "shadow-sm",
    "hover:bg-lightFrenchGrey",
  ];

  const themeDark = [
    "border-zinc-800",
    "bg-zinc-950",
    "text-lightFrenchGrey",
    "border border-2",
    "text-md  font-semibold",
    "rounded-xl",
    "p-4",
    "w-full h-full",
    "placeholder-lightFrenchGrey",
    "shadow-lg",
    "hover:bg-zinc-900",
  ];

  const headerThemeRetro = [
    barlow.className,
    "text-retro-brown",
    "text-2xl  italic font-bold",
  ];
  const headerThemeLight = ["text-onyx", "text-2xl  font-bold"];
  const headerThemeDark = ["text-lightFrenchGrey", "text-2xl  font-bold"];

  const cardThemeRetro = [
    "bg-retro-green",
    "border-retro-brown rounded-2xl",
    "text-retro-brown",
  ];
  const cardThemeLight = [
    "bg-antiFlashWhite",
    "border-frenchGrey",
    "shadow-lg",
    "rounded-lg",
    "text-night",
  ];

  const cardThemeDark = [
    "bg-zinc-950",
    "border-zinc-800",
    "rounded-lg",
    "text-seaSalt",
  ];

  const headerTheme =
    theme == "retro"
      ? headerThemeRetro
      : theme == "light"
      ? headerThemeLight
      : headerThemeDark;
  const buttonTheme =
    theme == "retro" ? themeRetro : theme == "light" ? themeLight : themeDark;
  const inputTheme =
    theme == "retro" ? themeRetro : theme == "light" ? themeLight : themeDark;
  const cardTheme =
    theme == "retro"
      ? cardThemeRetro
      : theme == "light"
      ? cardThemeLight
      : cardThemeDark;
  const cardButtonTheme =
    theme == "retro" ? themeRetro : theme == "light" ? themeLight : themeDark;
  const cardInputTheme =
    theme == "retro" ? themeRetro : theme == "light" ? themeLight : themeDark;

  return (
    <main
      className={classNames(
        mainBackground,
        "relative  min-h-screen min-w-screen flex flex-col items-center justify-start gap-24 pt-24"
      )}
    >
      <SelectTheme
        theme={cardTheme}
        headerTheme={headerTheme}
        buttonTheme={cardButtonTheme}
        showShadow={theme === "retro"}
        showShadowButton={theme === "retro"}
        setTheme={setTheme}
      />

      <Button theme={buttonTheme} showShadow={theme === "retro"} />
      <Input
        theme={inputTheme}
        showShadow={theme === "retro"}
        placeholder="Input"
      />
      <Card
        className="h-96 w-96 relative"
        selectedTheme={theme}
        theme={cardTheme}
        headerTheme={headerTheme}
        buttonTheme={cardButtonTheme}
        inputTheme={cardInputTheme}
        showShadow={theme === "retro"}
        showShadowButton={theme === "retro"}
      />
    </main>
  );
}
