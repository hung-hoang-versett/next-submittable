import "antd/dist/antd.css";
import "react-form-builder2/dist/app.css";
import "styles/global.css";
import type { AppProps } from "next/app";
import LayoutContainer from "containers/Layout";
import Head from "next/head";
import React from "react";
// @ts-ignore
import { Registry } from "react-form-builder2";
import TextOnly from "components/formBuilder/textOnly";
import SingleCheckbox from "components/formBuilder/singleCheckbox";
import LongAnswer from "components/formBuilder/longAnswer";
import Table from "components/formBuilder/table";

const customComponentsBuilder = Registry.list() as any[];
const components = [
  {
    key: "TextOnly",
    component: TextOnly,
  },
  {
    key: "SingleCheckbox",
    component: SingleCheckbox,
  },
  {
    key: "LongAnswer",
    component: LongAnswer,
  },
  {
    key: "Table",
    component: Table,
  },
];
components.forEach(
  ({ component, key }: { key: string; component: React.ReactNode }) => {
    if (!customComponentsBuilder.includes(key)) {
      Registry.register(key, component);
    }
  }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </LayoutContainer>
  );
}
export default MyApp;
