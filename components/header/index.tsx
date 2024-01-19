import Link from "next/link";
import Image from "next/image";
import sections from "../../utils/section";

const Header = () => {

  return (
    <>
      <nav className="fixed w-4/5 bg-white z-20 py-2 border-b-4 border-gray-900 container flex justify-center md:justify-end">
        <ul className="flex gap-6">
          {sections.category.map((sec, idx) => {
            return (
              <Link href={sec.link} key={`${idx}-${sec.title}`}>
                <li className="py-2 cursor-pointer hover:text-blue-700 hover:underline text-gray-900">
                  {sec.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
