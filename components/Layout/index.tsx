import Header from "../header";
import Footer from "../footer";
import { layoutProps } from "../../interface/props";

const Layout = ({ children }: layoutProps) => {
  return (
    <div className="mx-auto w-full max-w-[80%]">
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
