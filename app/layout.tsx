import React from "react";
import "thon-ui/core/base.css";
import "@/shared/css/global.css"
import '@/homepage/css/homepage.css';
import MainFooter from "@/shared/components/main-footer";
import MainHeader from "@/shared/components/main-header";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pr-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* lg:w-[26.5rem] xl:w-[34.25rem] */}
      <body className="lg:grid lg:grid-cols-[26.5rem_1fr] xl:grid-cols-[34.25rem_1fr]">
        <MainHeader />
        <main className="p-10">
          
        {children}
        
        
        <MainFooter/>
        </main>
      </body>
    </html>
  );
}
