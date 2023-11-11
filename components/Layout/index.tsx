import Header from "../header";
import { layoutProps } from "../../interface/props";

const Layout = ({ children }: layoutProps) => {
  return (
    <div className="mx-auto w-full max-w-[80%]">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
