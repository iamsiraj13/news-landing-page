import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "News Portal",
  description: "Write your own news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
