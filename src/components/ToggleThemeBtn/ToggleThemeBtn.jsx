import IconButton from "@mui/material/IconButton";
import { GoSun } from "react-icons/go";
import { PiMoonStarsThin } from "react-icons/pi";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ButtonWrap } from "./ToggleThemeBtn.styled";

const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ButtonWrap>
      <IconButton onClick={toggleTheme}>
        {theme.mode === "dark" ? (
          <GoSun size={20} fill="var(--background)" />
        ) : (
          <PiMoonStarsThin size={20} fill="var(--background)" />
        )}
      </IconButton>
    </ButtonWrap>
  );
};

export default ToggleThemeBtn;
