import Initializer from "./Initializer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChiyoCast - Get your stream without the hassle",
  description: "ChiyoCast - Get your stream without the hassle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Initializer>{children}</Initializer>
      </body>
    </html>
  );
}
