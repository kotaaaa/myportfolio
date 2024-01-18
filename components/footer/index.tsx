// components/Footer.js
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-white px-2 sm:px-4 py-3 bottom-0 left-0 w-full z-20 flex border-t-4 border-gray-900">
      <div className="container mx-auto flex justify-between">
        <div>
          {/* Copyright */}
          <p>© {new Date().getFullYear()} Kota Kawaguchi</p>
        </div>
        <div>
          {/* Contact & SNS */}
          <ul className="flex gap-5 justify-end">
            <li>
              <a href="mailto:kota.k.1132.pda@gmail.com" className="">
                <Image src="/logos/mail.svg" width={25} height={25} alt="mail" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/kotaaaa1110" className="">
                <Image src="/logos/x.svg" width={25} height={25} alt="x" />
              </a>
            </li>
            <li>
              <a href="https://github.com/kotaaaa" className="">
                <Image src="/logos/github.svg" width={25} height={25} alt="github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kota1110/" className="">
                <Image src="/logos/linkedin.svg" width={25} height={25} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
