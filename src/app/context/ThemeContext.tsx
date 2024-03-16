import { createContext, useState, Dispatch, SetStateAction } from "react";
import {
  themeRetro,
  themeLight,
  themeDark,
  headerThemeDark,
  headerThemeLight,
  headerThemeRetro,
  cardThemeLight,
  cardThemeDark,
  cardThemeRetro,
  navThemeDark,
  navThemeLight,
  navThemeRetro,
  navHeaderThemeDark,
  navHeaderThemeLight,
  navHeaderThemeRetro,
} from "../styles";

interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  showShadow: boolean;
  mainBackground: string;
  headerTheme: string[];
  buttonTheme: string[];
  inputTheme: string[];
  cardTheme: string[];
  navTheme: string[];
  navHeaderTheme: string[];
}

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
  showShadow: false,
  mainBackground: "bg-platinum",
  headerTheme: headerThemeLight,
  buttonTheme: themeLight,
  inputTheme: themeLight,
  cardTheme: cardThemeLight,
  navTheme: navThemeLight,
  navHeaderTheme: navHeaderThemeLight,
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  const mainBackground =
    theme == "retro"
      ? "bg-retro-blue"
      : theme == "light"
      ? "bg-platinum"
      : theme == "dark"
      ? "bg-black"
      : "bg-white";

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
  const navTheme =
    theme == "retro"
      ? navThemeRetro
      : theme == "light"
      ? navThemeLight
      : navThemeDark;

  const navHeaderTheme =
    theme == "retro"
      ? navHeaderThemeRetro
      : theme == "light"
      ? navHeaderThemeLight
      : navHeaderThemeDark;

  const showShadow = theme === "retro";
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        showShadow,
        mainBackground,
        headerTheme,
        buttonTheme,
        inputTheme,
        cardTheme,
        navTheme,
        navHeaderTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
