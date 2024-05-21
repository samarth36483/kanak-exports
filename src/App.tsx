import * as React from "react";
import Navbar from "./components/navbar.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Footer from "./components/footer. component";
import ContactPage from "./pages/contact";

const HeaderFooterWrapper = (PageComponent: React.FunctionComponent) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 4rem - 9rem)" }}>
        <PageComponent />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: HeaderFooterWrapper(HomePage),
  },
  {
    path: "/about",
    element: HeaderFooterWrapper(AboutPage),
  },
  {
    path: "/contact",
    element: HeaderFooterWrapper(ContactPage),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
