import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meals' Hub | Serving Happiness on Every Plate",
  description:
    "Meals' Hub is a Jos-based restaurant serving hearty, home-style meals. Order online or book a table at our Shinco Road, Rayfield location.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
