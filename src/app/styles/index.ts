import { Barlow } from "next/font/google";

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const themeRetro = [
  barlow.className,
  "border-retro-brown",
  "bg-retro-yellow",
  "text-retro-brown",
  "border border-2",
  "text-lg md:text-xl italic font-bold",
  "px-2 md:px-4",
  "rounded-2xl",
  "w-full h-full",
  "placeholder-retro-brown",
];

export const themeLight = [
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

export const themeDark = [
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

export const headerThemeRetro = [
  barlow.className,
  "text-retro-brown",
  "text-lg md:text-2xl  italic font-bold",
];
export const headerThemeLight = ["text-onyx", "text-2xl  font-bold"];
export const headerThemeDark = ["text-lightFrenchGrey", "text-2xl  font-bold"];

export const cardThemeRetro = [
  "bg-retro-green",
  "border-retro-brown rounded-2xl",
  "text-retro-brown",
];
export const cardThemeLight = [
  "bg-antiFlashWhite",
  "border-frenchGrey",
  "shadow-lg",
  "rounded-lg",
  "text-night",
];

export const cardThemeDark = [
  "bg-zinc-950",
  "border-zinc-800",
  "rounded-lg",
  "text-seaSalt",
];
