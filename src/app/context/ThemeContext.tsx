import { createContext, useState, Dispatch, SetStateAction } from "react";
import {
  themeLight,
  themeDark,
  themeRetro,
  themeNord,
  headerThemeLight,
  headerThemeDark,
  headerThemeRetro,
  headerThemeNord,
  cardThemeLight,
  cardThemeDark,
  cardThemeRetro,
  cardThemeNord,
  navThemeLight,
  navThemeDark,
  navThemeRetro,
  navThemeNord,
  navHeaderThemeLight,
  navHeaderThemeDark,
  navHeaderThemeRetro,
  navHeaderThemeNord,
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
    theme == "light"
      ? "bg-platinum"
      : theme == "dark"
      ? "bg-black"
      : theme == "retro"
      ? "bg-retro-blue"
      : theme == "nord"
      ? "bg-nord-deepDark"
      : "bg-white";

  const headerTheme =
    theme == "retro"
      ? headerThemeRetro
      : theme == "light"
      ? headerThemeLight
      : theme == "nord"
      ? headerThemeNord
      : headerThemeDark;
  const buttonTheme =
    theme == "retro"
      ? themeRetro
      : theme == "light"
      ? themeLight
      : theme == "nord"
      ? themeNord
      : themeDark;
  const inputTheme =
    theme == "retro"
      ? themeRetro
      : theme == "light"
      ? themeLight
      : theme == "nord"
      ? themeNord
      : themeDark;
  const cardTheme =
    theme == "retro"
      ? cardThemeRetro
      : theme == "light"
      ? cardThemeLight
      : theme == "nord"
      ? cardThemeNord
      : cardThemeDark;
  const navTheme =
    theme == "retro"
      ? navThemeRetro
      : theme == "light"
      ? navThemeLight
      : theme == "nord"
      ? navThemeNord
      : navThemeDark;

  const navHeaderTheme =
    theme == "retro"
      ? navHeaderThemeRetro
      : theme == "light"
      ? navHeaderThemeLight
      : theme == "nord"
      ? navHeaderThemeNord
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
