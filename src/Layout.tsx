import { lazy, Suspense, useEffect, useState } from "react";
import Footer from "src/components/common/Footer/Footer";
import Header from "src/components/common/Header";
import { useUI } from "src/sdk/ui/Provider";
import type { PropsWithChildren } from "react";
import "src/styles/pages/layout.scss";
import Toast from "./components/common/Toast";
import AgeGate from "./components/common/AgeGate";
const CartSidebar = lazy(() => import("src/components/cart/CartSidebar"));

function Layout({ children }: PropsWithChildren<unknown>) {
  const [showPage, setShowPage] = useState(false)
  const { cart: displayCart } = useUI();

  useEffect(() => {
    if (children && typeof window !== undefined) setShowPage(true)
  }, [])

  if(!showPage) return null

  return (
      <div id="layout">
        {/* <Toast /> */}
        <Header />
        <main>{children}</main>
        
        {displayCart && (
          <Suspense fallback={null}>
            <CartSidebar />
          </Suspense>
        )}

        <Footer />
        <AgeGate />
      </div>
  );
}

export default Layout;
