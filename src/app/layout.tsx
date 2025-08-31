"use client";

import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecondaryNav from "@/components/SecondaryNav";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ Homepage is just "/" not "/Home"
  const secondaryNavRoutes = [
    "/",            // homepage
    "/government",
    "/mil",
    "/fact-check",
    "/youth",
  ];

  const showSecondaryNav =
    secondaryNavRoutes.includes(pathname) ||
    secondaryNavRoutes.some((route) => pathname !== "/" && pathname.startsWith(route + "/"));

  return (
    <html lang="en" className={roboto.variable}>
      <body>
        {/* Navbar stays on top */}
        <Navbar />

        {/* SecondaryNav */}
        {showSecondaryNav && (
          <div className="shadow-sm">
            <div className="w-full mx-auto py-2">
              <SecondaryNav />
            </div>
          </div>
        )}

        {/* Page content */}
        <main>{children}</main>

        {/* Footer stays at bottom */}
        <Footer />
      </body>
    </html>
  );
}
