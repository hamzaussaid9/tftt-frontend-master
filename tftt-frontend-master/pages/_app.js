import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionContextProvider } from "../stores/SessionContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <SessionContextProvider>
      <SessionProvider session={pageProps.session}>
        <div className="justify-between flex flex-col h-screen">
          <Navbar />
          <div id="main" className="mt-20">
            <Component {...pageProps} />
          </div>
          <Footer />
          {/* may not work for all cases.  Liekly will need to be fixed.  */}
        </div>
      </SessionProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
