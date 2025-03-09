"use client"

import { Nunito, Open_Sans } from "next/font/google";
import Head from 'next/head'

import "../styles/global.css";
import ThemeRegistry from "./ThemeRegistry";

import Header from "@/components/layout/Header/index"

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400','500', '600', '700'], // Specify weights
  variable: '--font-nunito', // Define a CSS variable
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "PCEA MUKINYI PARISH",
  description: "Welcome to Mukinyi Parish, a vibrant Christian community dedicated to worship, fellowship, and service. Explore our diverse ministries, engaging events, and impactful outreach programs. Join us on our journey of faith and service to make a difference in our local community and beyond. Plan your visit today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${openSans.variable}`}>
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="PCEA Mukinyi Parish" />
        <meta
          name="description"
          content="Welcome to Mukinyi Parish, a vibrant Christian community dedicated to worship, fellowship, and service. Explore our diverse ministries, engaging events, and impactful outreach programs. Join us on our journey of faith and service to make a difference in our local community and beyond. Plan your visit today!"
        />
        <meta
          name="keywords"
          content="PCEA Mukinyi Parish, Nairobi, Kenya, worship services, community outreach, youth fellowship, Nairobi churches, Kenyan churches"
        />

        {/* Favicon */}
        <link rel="icon" href="/Logo_Plain/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo_Plain/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo_Plain/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logo_Plain/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Title */}
        <title>PCEA MUKINYI CHURCH</title>
        </Head>
        <ThemeRegistry>
          <Header />
          {children}
          {/* <Footer /> */}
        </ThemeRegistry>
      </body>
    </html>
  );
}
