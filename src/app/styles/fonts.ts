import { Barlow } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal"],
});
