import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    let timeOutArray = [];
    router.events.on("routeChangeStart", () => {
      let to1 = setTimeout(() => {
        setProgress(10);
      }, 150);
      let to2 = setTimeout(() => {
        setProgress(20);
      }, 300);
      let to3 = setTimeout(() => {
        setProgress(30);
      }, 450);
      let to4 = setTimeout(() => {
        setProgress(40);
      }, 600);
      let to5 = setTimeout(() => {
        setProgress(50);
      }, 750);
      let to6 = setTimeout(() => {
        setProgress(60);
      }, 900);
      let to7 = setTimeout(() => {
        setProgress(70);
      }, 1050);
      let to8 = setTimeout(() => {
        setProgress(80);
      }, 1200);
      let to9 = setTimeout(() => {
        setProgress(90);
      }, 1350);
      timeOutArray = [to1, to2, to3, to4, to5, to6, to7, to8, to9];
    });
    router.events.on("routeChangeComplete", () => {
      timeOutArray.forEach((toid) => {
        clearTimeout(toid);
      });
      setProgress(100);
    });
  }, [router.query]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime="400"
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
