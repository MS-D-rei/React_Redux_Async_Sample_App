import React from "react";
import MainHeader from "./MainHeader";

interface LayoutProps {
  children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  )
}

export default Layout;