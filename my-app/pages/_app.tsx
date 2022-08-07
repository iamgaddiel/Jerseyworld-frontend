import "../styles/globals.css";
import type { AppProps } from "next/app";

const colorTheme = {
  heading: {
    primary: "#041E48",
  },
  text: {
    neutral: "#4B5563",
    fontSizes: ["16px"],
  },
};

const typographyTheme = {
  fontSizes: ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.75rem", "10px"],
  bodyFontFamily: "Roboto",
  headingFontFamily: "Roboto",
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
