import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import NavbarComponent from "src/components/NavbarComponent";
import Footer from "src/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
