import Footer from "@/components/Footer";
import Navber from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navber />
      {children}
      <Footer />
    </>
  );
}