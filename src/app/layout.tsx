import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import{Heebo,Inter} from "next/font/google";

const heebo= Heebo({subsets:["latin"], weight: ["400","700"]});
const inter= Inter({subsets:["latin"], weight: ["400","700","900"]});


export default function Rootlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <Header font={inter} />

        {children}
        <Footer />
      </body>
    </html>
  );
}
