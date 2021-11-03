import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import LayoutContainer from "containers/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Component {...pageProps} />
    </LayoutContainer>
  );
}
export default MyApp;
