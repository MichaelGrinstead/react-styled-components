import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import classNames from "classnames";
import { Button } from "./Button";
import { NavHeader } from "./NavHeader";

export default function Navbar() {
  const { navTheme, headerTheme, showShadow } = useContext(ThemeContext);
  return (
    <nav
      className={classNames(
        navTheme,
        "flex flex-row items-center justify-center sticky top-0 h-16 md:h-20 z-10"
      )}
    >
      <NavHeader text={"Themed Components"} />
    </nav>
  );
}
