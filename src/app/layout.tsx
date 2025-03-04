import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-space-grotesk", // Define a CSS variable
});

/* Load Inter Font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Creates a global variable for Inter
});

/* Load Poppins Font */
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
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
