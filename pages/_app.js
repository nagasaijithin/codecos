import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { createGlobalStyle } from "styled-components";
import LayOut from "../components/layout";

import Router from "next/router";
import withGA from "next-ga";

const theme = {
  colors: {
    background: "#FFF2F2",
    text: "#000000",
  },
  fonts: {
    second: "Source Sans Pro, sans-serif",
  },
  media: {
    laptopL: "(max-width: 1024px)",
    laptopM: "(max-width: 816px)",
    tabL: "(max-width: 692px)",
    tabM: "(max-width: 653px)",
    mbL: "(max-width:495px)",
    mbM: "(max-width:425px)",
    mbS: "(max-width:375px)",
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
    @media ${(props) => props.theme.media.laptopL} {
      font-size: 46.6%;
    }
    @media ${(props) => props.theme.media.mbM} {
      font-size: 40.6%;

    }
}
body {
  background: linear-gradient(to top,#ffc7ce, #ffdde1);
  font-family: 'Playfair Display', serif;
  scroll-behavior: smooth;
/* font-family: 'Source Sans Pro', sans-serif; */
}
 `;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Codecos</title>

          <meta
            name="description"
            content="Codecos is a serviers help your bussines live in onlie and get custmers and make it as a brand"
          />
          {/* og tags */}
          <meta
            name="og:title"
            property="og:title"
            content="codecos that provied live your bussines on online"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://codecos.netlify.com/" />
          <meta property="og:description" content="code" />
          <meta property="og:image" content="/static/logo.svg" />
          {/* og tags end*/}
          {/* twitter tags*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://codecos.netlify.com" />
          <meta property="twitter:title" content="codecos" />
          <meta property="twitter:image" content="/static/logo.svg" />
          <meta property="twitter:description" content="codecos" />
          {/* twitter tags end*/}
          <meta name="robots" content="index, follow" />
          <link href="URL" rel="canonical" />
        </Head>
        <LayOut>
          <Component {...pageProps} />
          <GlobalStyle />
        </LayOut>
      </ThemeProvider>
    );
  }
}

export default withGA("UA-166135822-2", Router)(MyApp);
