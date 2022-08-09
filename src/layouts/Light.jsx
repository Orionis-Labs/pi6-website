/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const LightTheme = ({ children, mobileappstyle }) => {
  React.useEffect(() => {
    window.theme = "light";
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/light.css" />
        {mobileappstyle ? (
          <link href="/css/mobile-app-light.css" rel="stylesheet" />
        ) : (
          ""
        )}
      </Head>
      {children}
    </>
  );
};

export default LightTheme;
