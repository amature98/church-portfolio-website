const PRIMARY = {
  main: "#2D1B8C",
  dark: "#03010F",
  light: "#d8dcff",
};

const SECONDARY = {
  main: "#ED883B",
  dark: "#FEEC01",
  light: "#FED82A",
  contrastText: "#EFEFFF",
};
const ERROR = {
  main: "#E60004",
  dark: "#C11218",
  light: "#F3898A",
  contrastText: "#EFEFFF",
};
const SUCCESS = {
  main: "#2e7d32",
  dark: "#1b5e20",
  light: "#4caf50",
  contrastText: "#EFEFFF",
};

// creating a color palette object that will be default export
const palette = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  background: {
    paper: PRIMARY.contrastText,
    default: PRIMARY.contrastText,
	},
  divider: PRIMARY.dark,
  text: {
    primary: PRIMARY.dark,
    secondary: SECONDARY.contrastText,
    disabled: "rgba(0,0,0,0.12)",
  },
  action: {
    active: SECONDARY.main,
    activatedOpacity: 0.5,
    hover: SECONDARY.main,
    hoverOpacity: 0.5,
    selected: SECONDARY.main,
    selectedOpacity: 0.5,
    disabled: "rgba(0,0,0,0.12)",
    disabledBackground: "rgba(0,0,0,0.12)",
    disabledOpacity: 0.38,
    focus: SECONDARY.main,
    focusOpacity: 0.12,
  },
};
export default palette;
