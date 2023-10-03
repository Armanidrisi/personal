import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Arman Idrisi",
  description: "Coder and hackerr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
<meta name="google-site-verification" content="HMgX-ATjh_v5C3Hgwq4Mn2zFncMh_qqeB8ZRXeOuTu0" />
</head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
