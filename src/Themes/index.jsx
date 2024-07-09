import { useMemo } from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { palette } from "./Palette.theme";
import { typography } from "./Typography.theme";
import { overrides } from "./Overrides.theme";
import { shadows } from "./Shadows.theme";
import { customShadows } from "./customShadows.theme";

export default function Themeconfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: palette(),
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
      typography,
    }),
    []
  );
  const theme = createTheme(themeOptions);
  theme.components = overrides(theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

Themeconfig.propTypes = {
  children: PropTypes.node,
};
