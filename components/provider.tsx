"use client";
import { ThemeProvider } from "next-themes";

import { ReactNode } from "react";

export default function provider({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="data-mode">{children}</ThemeProvider>;
}