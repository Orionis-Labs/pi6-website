/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const DarkTheme = ({ children, useSkin, mobileappstyle }) => {
  React.useEffect(() => {
    window.theme = "dark";
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/dark.css" />
        {useSkin ? (
          <link rel="stylesheet" href="/css/arch-skin-dark.css" />
        ) : (
          ""
        )}
        {mobileappstyle ? (
          <link href="/css/mobile-app-dark.css" rel="stylesheet" />
        ) : (
          ""
        )}
      </Head>
      {children}
    </>
  );
};

export default DarkTheme;
