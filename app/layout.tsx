//? for setting up styling, SEO data, and the website's layout with a focus on metadata for SEO optimization

//* STYLING
import "./globals.css";
//* SEO DATA
import type { Metadata } from "next";
//* COMPONENTS
import { Footer, NavBar } from "@/components";

//! setting the metadata title and description for SEO
export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

//! the root layout of the website
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
