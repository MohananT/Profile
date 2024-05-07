import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-providers";
import Body from "@/components/Body";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Mohan',
    template: '%s | Mohan',
  },
  description: "Software developer, web developer, freelance web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className} mx-auto max-w-screen-sm`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="grid gap-4 grid-rows-8 mt-5">
            <div className="row-span-1 ">
              <Header />
            </div>
            <div className="row-span-6">
              {children}
              {/* <Body /> */}
            </div>
            <div className="row-span-1 ">
              <Footer />
            </div>
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
