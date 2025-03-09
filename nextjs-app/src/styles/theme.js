import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
        main: "#2D1B8C",
        dark: "#03010F",
        light: "#d8dcff",
    },
    secondary: {
        main: "#ED883B",
        dark: "#FEEC01",
        light: "#FED82A",
        contrastText: "#EFEFFF",
    },
    info: {
        lighter: "#CAFDF5",
        light: "#61F3F3",
        main: "#00B8D9",
        dark: "#006C9C",
        darker: "#003768",
        contrastText: "#FFFFFF",
    },
    error: {
        lighter: "#FFE9D5",
        light: "#FFAC82",
        main: "#FF5630",
        dark: "#B71D18",
        darker: "#7A0916",
        contrastText: "#FFFFFF",
      },
      success: {
        lighter: "#C8FAD6",
        light: "#5BE49B",
        main: "#00A76F",
        dark: "#007867",
        darker: "#004B50",
        contrastText: "#FFFFFF",
      },
      warning: {
        lighter: "#FFF5CC",
        light: "#FFD666",
        main: "#FFAB00",
        dark: "#B76E00",
        darker: "#7A4100",
        contrastText: "#212B36",
      },
    background: {
        paper: "#FFFFFF",
        default: "#F9FAFB",
        neutral: "#F4F6F8",
    },
  },
  typography: {
    fontFamily: "'Nunito', 'Open Sans', sans-serif",
  },
});

export default theme;
