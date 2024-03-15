// function to make the font size responsive
const responsiveFontSize = (value) => {
	return `${value}vw`;
};
const responsiveFontSizes = ({ sm, md, lg }) => {
	return {
		'@media (min-width:600px)': {
			fontSize: responsiveFontSize(sm),
		},
		'@media (min-width:900px)': {
			fontSize: responsiveFontSize(md),
		},
		'@media (min-width:1200px)': {
			fontSize: responsiveFontSize(lg),
		},
	};
};

//Font families
const SECONDARY_FONT = 'Nunito, sans-serif'; //For headings
const PRIMARY_FONT = 'Open Sans, sans-serif'; //For Body text

//Font Weights
const fontWeightThin = 200;
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightBold = 500;

const typography = {
	fontFamily: PRIMARY_FONT,
	fontWeight: fontWeightRegular,
	h1: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightBold,
		lineHeight: 1.0,
		textTransform: 'uppercase',
		letterSpacing: 1,
		color: 'white',
		fontSize: responsiveFontSize(10),
		...responsiveFontSizes({ sm: 8.5, md: 7.5, lg: 6.5 }),
	},
	h2: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightBold,
		textTransform: 'capitalize',
		letterSpacing: 1,
		color: '#000000',
		fontSize: responsiveFontSize(12),
		...responsiveFontSizes({ sm: 10, md: 7.5, lg: 7.5 }),
	},
	h3: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightRegular,
		lineHeight: 1.0,
		textTransform: 'capitalize',
		letterSpacing: 1,
		color: 'white',
		fontSize: responsiveFontSize(6),
		...responsiveFontSizes({ sm: 6, md: 3.76, lg: 3.5 }),
	},
	h4: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightBold,
		lineHeight: 1.0,
		textTransform: 'capitalize',
		letterSpacing: 1,
		fontSize: responsiveFontSize(3.5),
		...responsiveFontSizes({ sm: 3.6, md: 3.75, lg: 3.0 }),
	},
	h5: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightThin,
		lineHeight: 1.25,
		textTransform: 'capitalize',
		letterSpacing: 1,
		color: 'white',
		fontSize: responsiveFontSize(3.75),
		...responsiveFontSizes({ sm: 2.75, md: 3, lg: 1.75 }),
	},
	h6: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightBold,
		lineHeight: 1.0,
		textTransform: 'capitalize',
		letterSpacing: 1,
		fontSize: responsiveFontSize(3.5),
		...responsiveFontSizes({ sm: 2.75, md: 3, lg: 1.75 }),
	},
	body1: {
		fontFamily: PRIMARY_FONT,
		fontWeight: fontWeightLight,
		lineHeight: 1.5,
		letterSpacing: 1,
		fontSize: responsiveFontSize(4.5),
		...responsiveFontSizes({ sm: 3.75, md: 2.75, lg: 2.25 }),
	},
	body2: {
		fontFamily: PRIMARY_FONT,
		fontWeight: fontWeightLight,
		lineHeight: 1.0,
		fontSize: responsiveFontSize(3.2),
		...responsiveFontSizes({ sm: 3.0, md: 2.5, lg: 1.5 }),
	},
	button: {
		fontFamily: SECONDARY_FONT,
		fontWeight: fontWeightBold,
		textTransform: 'capitalize',
		fontSize: responsiveFontSize(3.5),
		...responsiveFontSizes({ sm: 2.0, md: 1.75, lg: 1.5 }),
	},
	quote: {
		fontFamily: PRIMARY_FONT,
		fontWeight: fontWeightLight,
		lineHeight: 1.5,
		letterSpacing: 1,
		fontSize: responsiveFontSize(3.5),
		...responsiveFontSizes({ sm: 3.0, md: 1.75, lg: 1.5 }),
	},
};
export default typography;
