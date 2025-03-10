"use client";

import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";

export default function LogoNavLink() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        width: 40,
        height: 40,
        cursor: "pointer",
        display: "inline-flex",
      }}
    >
      <Image
        src="/logo.png"
        alt="PCEA Mukinyi Church Logo"
        width={40}
        height={40}
        priority // Optimizes loading
      />
    </Box>
  );
}
