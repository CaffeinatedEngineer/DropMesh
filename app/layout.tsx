import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DropMesh | Cross-platform LAN file transfer",
  description:
    "DropMesh is a cross-platform file transfer application built with Flutter, Dart, Node.js, WebSockets, and SQLite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
