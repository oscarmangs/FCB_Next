
import { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import TopNav from "./topNav";

const Layout = ({ children }) => {
useEffect(() => {
  if (!window.dataLayer.some((item) => item.event === "page_view")) {
    window.dataLayer.push({
      event: "virtual_pageview",
    });
  }
}, []);

  return (
    <>
      <GoogleTagManager gtmId="GTM-MG5Q6TN" />
      <TopNav />
      {children}
    </>
  );
};

export default Layout;
