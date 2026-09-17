import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import MobileTabBar from "../components/MobileTabBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Manuel Complet de Français — Studio social",
  description:
    "Transformez chaque règle, expression et anecdote du manuel de français en posts et stories prêts à publier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${fraunces.variable} ${jakarta.variable} font-sans antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 min-w-0 pb-20 md:pb-0">{children}</main>
        </div>
        <MobileTabBar />
      </body>
    </html>
  );
}
