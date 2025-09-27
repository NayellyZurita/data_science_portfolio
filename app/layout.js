import "./globals.css";

export const metadata = {
  title: {
    default: "Nayelly Zurita | Data Science & Engineering Portfolio",
    template: "%s | Nayelly Zurita",
  },
  description:
    "Data engineering, analytics, and machine learning projects, experiments, and writing by Nayelly Zurita.",
  metadataBase: new URL("https://nayellyzurita.dev"),
  openGraph: {
    title: "Nayelly Zurita | Data Science & Engineering Portfolio",
    description:
      "Explore projects, research, and writing across data engineering, analytics, and machine learning.",
    url: "https://nayellyzurita.dev",
    siteName: "Nayelly Zurita Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/pro.jpg",
        width: 1200,
        height: 630,
        alt: "Nayelly Zurita portfolio hero background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayelly Zurita | Data Science & Engineering Portfolio",
    description:
      "Projects and research blending data engineering, machine learning, and analytics by Nayelly Zurita.",
    creator: "@nayellyzurita",
    images: ["/pro.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
