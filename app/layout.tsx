import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HyperWork Gear | Phím & chuột cho góc làm việc hiện đại",
  description:
    "Landing page giới thiệu phím và chuột HyperWork, điều hướng mua hàng tại FPT Shop và Thế Giới Di Động."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
