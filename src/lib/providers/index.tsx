"use client";

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./Provider";


const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;