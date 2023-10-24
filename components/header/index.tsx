import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import theme from "../../utils/theme";
import sections from "../../utils/section";

const Header = () => {
  const [darkMode, setDarkMode] = useState(theme.light);


  const toggleDarkClassToHTML = () => {
    const rootElement = document.documentElement;
    if (!rootElement.classList.contains(theme.dark)) {
      rootElement.classList.add(theme.dark);
      return;
    }
    rootElement.classList.remove(theme.dark);
  };

  const toggleDarkMode = () => {
    toggleDarkClassToHTML();

    if (darkMode !== theme.dark) {
      localStorage.setItem(theme.theme, theme.dark);
      setDarkMode(theme.dark);
      return;
    }

    localStorage.setItem(theme.theme, theme.light);
    setDarkMode(theme.light);
  };

  // const initDarkMode = () => {
  //   const storedMode = localStorage.getItem(theme.theme);
  //   if (!storedMode || storedMode !== theme.dark) return;
  //   const rootElement = document.documentElement;
  //   rootElement.classList.add(theme.dark);
  //   setDarkMode(theme.dark);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", navBarHandler);
  //   initDarkMode();

  //   return () => {
  //     document.removeEventListener("mousedown", navBarHandler);
  //   };
  // }, [navBarHandler]);

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 flex border-b-4 border-gray-900 dark:border-gray-500">
        <div className="container flex flex-wrap justify-end items-center mx-auto">
          <div
            className=""
          >
            <ul className="flex bg-gray-50 rounded-lg border border-gray-100 flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700">
              {sections.category.map((sec, idx) => {
                return (
                  <Link href={sec.link} key={`${idx}-${sec.title}`}>
                    <li className="block py-2 rounded cursor-pointer hover:text-blue-700 dark:hover:text-blue-700 p-0 text-gray-900 dark:text-gray-400">
                      {sec.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-end md:order-2">
            <div className="flex item-center px-2 sticky">
              <button
                type="button"
                className="text-gray-900 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 hover:text-blue-700 dark:hover:text-blue-700"
                onClick={toggleDarkMode}
              >
                {darkMode === theme.dark ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} size="lg" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
