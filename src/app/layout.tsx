import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlow_semi_condensed = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "BVV | Rock Paper Scissors",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        id="body"
        className={`${barlow_semi_condensed.className} min-h-screen w-full`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
