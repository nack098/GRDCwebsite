import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Provider } from "@/components/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html>
      <head>
        <title>Game Research and Development Club - GRDC</title>
      </head>
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
