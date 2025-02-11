import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MasNamri",
  description: "Official personal website of Naufal Ammar Badri",
  icons: "../../public/iconku.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="../../public/iconku.png" sizes="any" />
      </head>
      {children}
    </html>
  );
}
