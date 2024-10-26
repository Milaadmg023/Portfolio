import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Created by Milad Bageri | https://t.me/CodinaDev",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
