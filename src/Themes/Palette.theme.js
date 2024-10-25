import { alpha } from "@mui/material/styles";
export const grey = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};
export const primary = {
  main: "#2D1B8C",
  dark: "#03010F",
  light: "#d8dcff",
};

export const secondary = {
  main: "#ED883B",
  dark: "#FEEC01",
  light: "#FED82A",
  contrastText: "#EFEFFF",
};
export const info = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#FFFFFF",
};
export const error = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};
export const success = {
  lighter: "#C8FAD6",
  light: "#5BE49B",
  main: "#00A76F",
  dark: "#007867",
  darker: "#004B50",
  contrastText: "#FFFFFF",
};
export const warning = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: grey[800],
};

export const common = {
  black: "#000000",
  white: "#FFFFFF",
};

export const action = {
  hover: alpha(grey[900], 0.5),
  selected: alpha(grey[600], 0.6),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.5),
  hoverOpacity: 0.8,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[0], 0.5),
  action,
};

export function palette() {
  return {
    ...base,
    text: {
      primary: grey[800],
      secondary: grey[0],
      disabled: grey[500],
    },
    background: {
      paper: "#FFFFFF",
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[0],
    },
  };
}
