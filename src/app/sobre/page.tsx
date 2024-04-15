"use client";

import { AppWrapper } from "@/context/app.context";
import FooterPortfolio from "../components/footer";
import Header from "../components/header";
import MainAbout from "./main";

export default function Sobre() {
  return (
    <>
      <AppWrapper>
        <Header />
        <MainAbout />
        <FooterPortfolio />
      </AppWrapper>
    </>
  );
}
