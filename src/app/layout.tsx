import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-space-grotesk", // Define a CSS variable
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Creates a global variable for Inter
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // Include different font weights
  variable: "--font-poppins", // Creates a global variable for Poppins
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // Include different font weights
  variable: "--font-jetBrainsMono", // Creates a global variable for Poppins
});


export const metadata: Metadata = {
  title: "Omais Satti",
  description: "Welcome to Omais Satti's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${spaceGrotesk.variable} ${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
