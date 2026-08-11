import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Ndeule — Software Engineer & Network Enthusiast",
  description:
    "Portfolio of Joshua Ndeule, a Software Engineer, Full-Stack Developer, and Network & Cybersecurity Enthusiast based in Lilongwe, Malawi.",
  keywords: [
    "Joshua Ndeule",
    "Software Engineer",
    "Full-Stack Developer",
    "Network Security",
    "Malawi Developer",
  ],
  authors: [{ name: "Joshua Ndeule" }],
  openGraph: {
    title: "Joshua Ndeule — Software Engineer & Network Enthusiast",
    description:
      "Software Engineer, Full-Stack Developer, and Network & Cybersecurity Enthusiast based in Lilongwe, Malawi.",
    type: "website",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-cyan">
        {children}
      </body>
    </html>
  );
}
