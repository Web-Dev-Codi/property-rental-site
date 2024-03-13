import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find yyour dream rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
