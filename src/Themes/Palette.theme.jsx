const PRIMARY = {
	main: '#004c6d', //deep blue
	dark: '#333333', //dark gray
	light: '#f8f8ff', // white
};

const SECONDARY = {
	main: '#4caf50', //grass green
	dark: '#ffc107', //warm yellow
	light: '#ff5722', //orange
};

// creating a color palette object that will be default export
const palette = {
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	background: {
		default: PRIMARY.light,
	},
	text: {
		primary: PRIMARY.dark,
		secondary: SECONDARY.light,
		light: PRIMARY.light,
	},
	action: {
		active: SECONDARY.light,
		activatedOpacity: 0.5,
		hover: SECONDARY.light,
		hoverOpacity: 0.5,
		selected: SECONDARY.light,
		selectedOpacity: 0.5,
	},
};
export default palette;
