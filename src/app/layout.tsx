import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import Header from "@/components/header";
import { Josefin_Sans } from 'next/font/google'
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { domain } from "@/data/_helpers/_constants";

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: {
    default: "AroMaa | Find Recipes For Every Meal",
    template: "AroMaa | %s",
  },
  description: `Discover Delicious Recipes to Savor Every Bite`,
  keywords: ["recipes", "food", "cooking", "meal", "delicious"],
  metadataBase: new URL(domain ?? ""),
  alternates: {
    canonical: domain
  },
  openGraph: {
    images: ['/images/main-og.png'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="body"
        className={`${josefinSans.className}  antialiased min-w-full min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className=" md:mt-20 mt-16">
            {children}
          </main>
          <Footer />

        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
