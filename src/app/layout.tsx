import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d9488",
};

export const metadata: Metadata = {
  title: "Priyanka | Thyroid-Focused Nutritionist & Women's Health",
  description:
    "Helping women manage thyroid symptoms, boost energy, and work toward healthy weight management through personalised nutrition—so they can feel like themselves again.",
  keywords: [
    "Thyroid Nutritionist",
    "Hypothyroidism Diet",
    "Hashimoto Nutrition",
    "PCOS and Thyroid Coach",
    "Personalized Thyroid Diet",
    "Priyanka Nutritionist",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Priyanka | Thyroid-Focused Nutritionist",
    description:
      "Manage thyroid symptoms, boost energy, and achieve healthy weight management through personalized nutrition.",
    type: "website",
    locale: "en_IN",
    siteName: "Priyanka Nutrition",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka | Thyroid-Focused Nutritionist",
    description:
      "Manage thyroid symptoms, boost energy, and achieve healthy weight management through personalized nutrition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#fafaf7] text-[#19322b]">
        {children}
      </body>
    </html>
  );
}
