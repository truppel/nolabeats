import type { Metadata } from "next";
import "./globals.css";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Terrance Ruppel | Enterprise Developer & React Builder",
  description: "Terrance Ruppel's developer portfolio: enterprise systems experience, modern React projects, and practical software that solves real problems.",
  icons: { icon: `${pagesBasePath}/favicon.svg`, shortcut: `${pagesBasePath}/favicon.svg` },
  openGraph: { title: "Terrance Ruppel | Enterprise Developer & React Builder", description: "Enterprise systems experience meets modern React development.", type: "website" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
