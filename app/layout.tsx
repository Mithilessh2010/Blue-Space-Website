import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Space — Hardware + Software Hackathon",
  description:
    "A one-day hardware + software hackathon at Zoho Corporation, Pleasanton CA. April 19. Free to attend. Build cool things, meet people, get PCB coupons.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Blue Space Hackathon",
    description: "Build Guilds presents Blue Space — April 19 at Zoho Corporation, Pleasanton CA",
    images: ["/images/poster.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
