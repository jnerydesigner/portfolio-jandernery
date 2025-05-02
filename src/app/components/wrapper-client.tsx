"use client";

import { AppWrapper } from "@/context/app.context";
import Header from "./header";
import { Footer } from "../_components/footer";

export const WrapperClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppWrapper>
      <Header />
      {children}
      <Footer />
    </AppWrapper>
  );
};
