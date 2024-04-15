"use client";

import { AppWrapper } from "@/context/app.context";
import FooterPortfolio from "../components/footer";
import Header from "../components/header";
import MainContact from "./main";

export default function Contact() {
  return (
    <>
      <AppWrapper>
        <Header />
        <MainContact />
        <FooterPortfolio />
      </AppWrapper>
    </>
  );
}
