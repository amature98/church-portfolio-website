import React from 'react';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

function GlobalStyles() {
	return (
    <GlobalThemeStyles
      styles={{
        "*": {
          margin: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100vw",
          overflowX: "hidden",
          textRendering: "optimizeLegibility",
        },
        body: {
          width: "100vw",
          overflowX: "hidden",
          textRendering: "optimizeLegibility",
        },
        a: {
          color: "#000000",
          textDecoration: "none",
        },
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: "#F8F8FF",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#2D1B8C",
          borderRadius: "16px",
          height: "25vh",
        },
        ".lineChildren": {
          overflow: "hidden",
          transform: "translate(0, 200px)",
        },
      }}
    />
  );
}

export default GlobalStyles;
