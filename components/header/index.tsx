import Link from "next/link";
import Image from "next/image";
import sections from "../../utils/section";

const Header = () => {

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-3 fixed w-full z-20 top-0 left-0 flex border-b-4 border-gray-900">
        <div className="px-8">
          <Link href='/' key="home">
            <a>
              <Image
                src="/myicon.png"
                width={60}
                height={60}
                alt="myicons"
                />
            </a>
          </Link>
        </div>
        <div className="container flex flex-wrap justify-end items-center mx-auto">
          <div
            className=""
          >
            <ul className="flex bg-gray-50 rounded-lg border border-gray-100 flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white">
              {sections.category.map((sec, idx) => {
                return (
                  <Link href={sec.link} key={`${idx}-${sec.title}`}>
                    <li className="block py-2 rounded cursor-pointer hover:text-blue-700 hover:underline p-0 text-gray-900 text-lg">
                      {sec.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
