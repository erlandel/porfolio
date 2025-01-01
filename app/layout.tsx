import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import NavbarUI from "@/components/ui/NavbarUI";
import { FooterUI } from "@/components/ui/FooterUI";

export const metadata: Metadata = {};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <div>
            <div className="bg-[url('/images/background/1.webp')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col">
              <div>
                <NavbarUI />
              </div>

              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>

              <div>
                <FooterUI />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
