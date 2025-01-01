import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rappel Conso Enfants",
  description: "Liste des produits rappellés destinés aux enfants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
