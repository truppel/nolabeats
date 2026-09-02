import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terry Ruppel | Enterprise Developer & React Builder",
  description: "Terry Ruppel's developer portfolio: enterprise systems experience, modern React projects, and practical software that solves real problems.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Terry Ruppel | Enterprise Developer & React Builder", description: "Enterprise systems experience meets modern React development.", type: "website" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
