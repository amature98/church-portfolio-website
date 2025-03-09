// app/ThemeRegistry.js
"use client";

import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useServerInsertedHTML } from "next/navigation";
import theme from '@styles/theme'

export default function ThemeRegistry({ children }) {
  const [key, setKey] = useState(0);

  useServerInsertedHTML(() => {
    setKey((prev) => prev + 1);
    return null;
  });

  return (
    <ThemeProvider theme={theme} key={key}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
