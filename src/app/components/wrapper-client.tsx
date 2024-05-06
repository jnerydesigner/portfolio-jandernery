"use client";

import { AppWrapper } from "@/context/app.context";
import Header from "./header";

export const WrapperClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppWrapper>
      <Header />
      {children}
    </AppWrapper>
  );
};
