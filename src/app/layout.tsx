import type { Metadata } from "next";
import "./globals.css";
import SidebarMenu from "../../src/app/components/sidebarMenu";
import { Roboto } from 'next/font/google'
import Footer from "./components/footer";
 
const roboto = Roboto({
  weight: ['100','300','400','500','700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "JMPLAY GAMESTORE",
  description: "Game Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-full flex`}>
        <SidebarMenu />
        <div className="w-full flex flex-col justify-between">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
