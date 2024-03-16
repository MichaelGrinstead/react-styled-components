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
  "px-3 md:px-4",
  "rounded-2xl",
  "w-full h-full",
  "placeholder-retro-brown",
  "hover:opacity-95",
];

export const themeLight = [
  "border-frenchGrey",
  "bg-antiFlashWhite",
  "text-night",
  "border border-2",
  "text-md md:text-lg font-semibold ",
  "rounded-xl",
  "px-3 md:px-4",
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
  "text-md md:text-lg font-semibold ",
  "rounded-xl",
  "px-3 md:px-4",
  "w-full h-full",
  "placeholder-lightFrenchGrey",
  "shadow-lg",
  "hover:bg-zinc-900",
];

export const headerThemeRetro = [
  barlow.className,
  "text-retro-brown",
  "text-lg sm:text-2xl",
  "italic font-bold",
];
export const headerThemeLight = [
  "text-onyx",
  "text-lg sm:text-xl",
  " font-semibold",
];
export const headerThemeDark = [
  "text-lightFrenchGrey",
  "text-lg sm:text-xl",
  "font-semibold",
];

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

export const navThemeRetro = [
  "bg-retro-green",
  "border-b-4 border-retro-brown",
];
export const navThemeLight = [
  "bg-antiFlashWhite",
  "border-b border-frenchGrey",
];

export const navThemeDark = ["bg-zinc-950", "border-b border-zinc-800"];

export const navHeaderThemeRetro = [
  barlow.className,
  "flex justify-center items-center",
  "border-retro-brown",
  "bg-retro-yellow",
  "text-retro-brown",
  "border border-2",
  "text-xl md:text-3xl italic font-extrabold",
  "rounded-2xl",
  "w-full h-full",
  "placeholder-retro-brown",
  "hover:opacity-95",
];
export const navHeaderThemeLight = [
  "flex justify-center items-center",
  "border-2 ",
  "border-frenchGrey",
  "bg-antiFlashWhite",
  "text-night",
  "text-xl md:text-3xl italic font-extrabold",
  "rounded-xl",
  "px-3 md:px-4",
  "w-full h-full",
  "placeholder-onyx",
  "shadow-sm",
];

export const navHeaderThemeDark = [
  "flex justify-center items-center",
  "border-2",
  "border-zinc-800",
  "bg-zinc-950",
  "text-lightFrenchGrey",
  "border border-2",
  "text-xl md:text-3xl italic font-extrabold",
  "rounded-xl",
  "px-3 md:px-4",
  "w-full h-full",
  "placeholder-lightFrenchGrey",
  "shadow-lg",
  "hover:bg-zinc-900",
];
