// Import necessary dependencies
import { Inter } from "next/font/google";
import "./globals.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
