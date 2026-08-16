import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "MONUMENT — премиальный дом в Хамовниках",
  description: "Клубный дом MONUMENT: архитектура личного пространства в сердце Москвы.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
