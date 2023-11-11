import Link from "next/link";
import Image from "next/image";
import sections from "../../utils/section";

const Header = () => {

  return (
    <>
      <nav className="fixed top-0 sm:w-4/5 bg-white sm:px-0 py-3 z-20 flex border-b-4 border-gray-900">
        <div className="mr-10 sm:mr-0">
          <Link href='/' key="home">
            <a>
              <Image
                src="/myicon.png"
                width={50}
                height={50}
                alt="myicons"
                />
            </a>
          </Link>
        </div>
        <div className="container flex sm:justify-end items-center">
          <ul className="flex bg-gray-50 rounded-lg border border-gray-100 flex-row space-x-2 sm:space-x-8 text-sm font-medium border-0 bg-white">
            {sections.category.map((sec, idx) => {
              return (
                <Link href={sec.link} key={`${idx}-${sec.title}`}>
                  <li className="py-2 cursor-pointer hover:text-blue-700 hover:underline text-gray-900 sm:text-lg">
                    {sec.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
