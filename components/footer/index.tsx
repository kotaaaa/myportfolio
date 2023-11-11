// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-white px-2 sm:px-4 py-3 bottom-0 left-0 w-full z-20 flex border-t-4 border-gray-900">
      <div className="container mx-auto flex justify-between">
        <div>
          {/* Copyright */}
          <p>© {new Date().getFullYear()} Kota Kawaguchi</p>
          <p>All Rights Reserved</p>
        </div>
        <div>
          {/* Contact & SNS */}
          <p>Contact: kota.k.1132.pda@gmail.com</p>
          <ul className="flex space-x-4">
            <li>
              <a href="https://twitter.com/kotaaaa1110" className="hover:underline">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/kotaaaa" className="hover:underline">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kota1110/" className="hover:underline">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
