import Initializer from "./Initializer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS + Chakra UI + Redux + TypeScript",
  description: "NextJS + Chakra UI + Redux + TypeScript template",
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
