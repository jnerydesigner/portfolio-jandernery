"use client";

import { AppWrapper } from "@/context/app.context";
import FooterPortfolio from "../(portfolio)/components/footer";
import Header from "../(portfolio)/components/header";
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
