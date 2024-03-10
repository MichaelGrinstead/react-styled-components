"use client";

import { useState } from "react";
import { Button } from "./components/Button";
import SelectTheme from "./components/SelectTheme";
import classNames from "classnames";
import { Input } from "./components/Input";
import Card from "./components/Card";

export default function Home() {
  const [theme, setTheme] = useState("retro");

  const mainBackground =
    theme == "retro"
      ? "bg-retro-blue"
      : theme == "light"
      ? "bg-clean-platinum"
      : theme == "dark"
      ? "bg-zinc-950"
      : "bg-white";

  const themeRetro = [
    "border-retro-brown",
    "bg-retro-yellow",
    "text-retro-brown",
    "border border-2",
    "text-xl italic font-bold",
    "p-4",
    "rounded-2xl",
    "w-full h-full",
    "placeholder-retro-brown",
  ];

  const themeLight = [
    "border-clean-frenchGrey",
    "bg-clean-antiFlashWhite",
    "text-clean-night",
    "border border-2",
    "text-lg font-semibold italic",
    "rounded-lg",
    "p-4",
    "w-full h-full",
    "placeholder-clean-onyx",
    "shadow-lg",
    "hover:bg-clean-lightFrenchGrey",
  ];

  const themeDark = [
    "border-clean-onyx",
    "bg-black",
    "text-clean-lightFrenchGrey",
    "border border-2",
    "text-lg font-semibold italic",
    "rounded-lg",
    "p-4",
    "w-full h-full",
    "placeholder-clean-lightFrenchGrey",
    "shadow-lg",
    "hover:bg-zinc-950",
  ];

  const headerThemeRetro = ["text-retro-brown", "text-2xl italic font-bold"];
  const headerThemeLight = ["text-clean-onyx", "text-2xl italic font-bold"];
  const headerThemeDark = [
    "text-clean-lightFrenchGrey",
    "text-2xl italic font-bold",
  ];

  const cardThemeRetro = [
    "bg-retro-green",
    "border-retro-brown rounded-2xl",
    "text-retro-brown",
  ];
  const cardThemeLight = [
    "bg-clean-antiFlashWhite",
    "border-clean-frenchGrey",
    "shadow-2xl",
    "rounded-lg",
    "text-clean-night",
  ];

  const cardThemeDark = [
    "bg-black",
    "border-clean-onyx",
    "shadow-2xl",
    "rounded-lg",
    "text-clean-seaSalt",
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
        placeholder="Input..."
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
