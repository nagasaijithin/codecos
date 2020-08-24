import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";
const theme = {
  colors: {
    background: "#FFF2F2",
    text: "#000000",
  },
  fonts: {
    second: "Source Sans Pro, sans-serif",
  },
};
const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    outline: none;
}
html {
    box-sizing: border-box;
    font-size: 52.6%;
    scroll-behavior: smooth;
}
body {
  background: linear-gradient(to top,#ffc7ce, #ffdde1);


  font-family: 'Playfair Display', serif;
  scroll-behavior: smooth;
/* font-family: 'Source Sans Pro', sans-serif; */
}
 `;
export default class MyApp extends App {
  componentDidMount() {
    let localState = localStorage.getItem("_theme");
    if (localState) {
      document.documentElement.setAttribute(
        "data-mode",
        JSON.parse(localState)
      );
    } else {
      localStorage.setItem("_theme", JSON.stringify("light"));
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Codecos</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ThemeProvider>
    );
  }
}
