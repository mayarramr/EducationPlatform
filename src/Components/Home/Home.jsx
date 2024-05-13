import React from "react";
import Style from "./Home.module.css";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import FourthSection from "../FourthSection/FourthSection";
import FifthSection from "../FifthSection/FifthSection";
import Navbar from "../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";

import { LanguageProvider } from '../LanguageContext';


export default function Home() {
  return (
    <>
      <LanguageProvider>
        <Helmet>
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </LanguageProvider>
    </>
  );
}
