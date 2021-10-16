import MenuContextProvider from "../components/MenuContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  );
}

export default MyApp;
