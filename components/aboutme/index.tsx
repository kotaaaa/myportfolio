import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from 'next';

// ProfileSection Component
const ProfileSection = () => {
  const profileImg = "/profile.jpg";
  const linkedinUrl = "https://www.linkedin.com/in/kota1110/";
  const gitHubUrl = "https://github.com/kotaaaa";
  const researchUrl = "https://kotaaaa.github.io/rhp/";
  return (
    <div className="profile-section grid grid-cols-1 md:grid-cols-2 h-screen justify-center items-center">
      <div className="flex justify-center items-center hidden md:flex">
        <Image
          className="rounded-full"
          src={profileImg}
          alt="me"
          width={350}
          height={350}
          priority
        />
      </div>
      <div className="">
        <div className="">
          <div className="py-4">
            <p className="text-center text-4xl py-1 font-bold">Hi, It's Kota </p>
            <p className="text-center text-xl py-1">Full Stack Developer</p>
          </div>
          <div className="py-1 flex content-center justify-center">
            <Link href={linkedinUrl}>
              <button>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2xl"
                  className="px-4 hover:text-blue-700"
                />
              </button>
            </Link>
            <Link href={gitHubUrl}>
              <button>
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  size="2xl"
                  className="px-4 hover:text-blue-700"
                />
              </button>
            </Link>
            <Link href={researchUrl}>
              <button>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size="2xl"
                  className="px-4 hover:text-blue-700"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-screen-md justify-center content-center">
          <p className="py-4 lg:mb-10 font-light text-center text-gray-500 sm:text-xl">
            Hi! I am Kota Kawaguchi who is Software Developer <br /> with 4+ years experience living in <strong>Vancouver</strong>. 
            <br/>
            My expertise field is <strong>Backend</strong> / <strong>DevOps</strong> / <strong>Cloud</strong> / <strong>Full Stack</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};


type Icon = {
  src: string;
  label: string;
};

type IconListProps = {
  icons: Icon[];
};

const programmingLanguage: Icon[] = [
  { src: "/icons/python.svg", label: "Python" },
  { src: "/icons/typescript.svg", label: "Typescript" },
  { src: "/icons/java.svg", label: "Java" }
];

const frameworks: Icon[] = [
  { src: "/icons/react.svg", label: "React" },
  { src: "/icons/vue.svg", label: "Vue" },
  { src: "/icons/fastapi.svg", label: "FastAPI" },
  { src: "/icons/airflow.svg", label: "Apache Airflow" },
  { src: "/icons/springboot.svg", label: "SpringBoot" }
];

const cloud: Icon[] = [
  { src: "/icons/aws.svg", label: "Amazon Web Service" },
  { src: "/icons/gcp.svg", label: "Google Cloud"},
]

const middleware: Icon[] = [
  { src: "/icons/kubernetes.svg", label: "Kubernetes" },
  { src: "/icons/jenkins.svg", label: "Jenkins" },
  { src: "/icons/looker.svg", label: "Looker" },
  { src: "/icons/nginx.svg", label: "Nginx" },
  { src: "/icons/datadog.svg", label: "Datadog" },
  { src: "/icons/linux.svg", label: "Linux" }
];

const IconList = ({ icons }: IconListProps) => {  
  return (
    <>
      {icons.map((icon, index) => (
        <div key={index} className="relative group hover:cursor-pointer mr-3">
          <Image src={icon.src} width={50} height={50} alt={icon.label} />
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">{icon.label}</span>
        </div>
      ))}
    </>
  );
};

// SkillSection Component
const SkillSection = () => {
  return (
    <div className="skill-section">
      <h1 className="mb-4 text-4xl tracking-tight font-black text-center text-gray-900">
        Techs
      </h1 >
      <p className="py-2 mb-2 text-xl tracking-tight text-center text-gray-900">
        Programming Language
      </p>
      <div className="flex content-center justify-center">
        <IconList icons={programmingLanguage} />
      </div>
      <p className="py-2 mb-2 text-xl tracking-tight text-center text-gray-900">
        Framework
      </p >   
      <div className="flex content-center justify-center">
        <IconList icons={frameworks} />
      </div>
      <p className="py-2 mb-2 text-xl tracking-tight text-center text-gray-900">
        Cloud
      </p >
      <div className="flex content-center justify-center">
        <IconList icons={cloud} />
      </div>
      <p className="py-2 mb-2 text-xl tracking-tight text-center text-gray-900">
        Middleware / Others
      </p >   
      <div className="flex justify-center">
        <IconList icons={middleware}/>
      </div>
    </div>
  );
};

// CertificationSection Component
const CertificationSection = () => {
  const [hoverMessage, setHoverMessage] = useState('');
  return (
    <div className="certification-section">
      <h1 className="py-2 mt-12 mb-2 text-4xl tracking-tight font-black text-center text-gray-900">
        Certification
      </h1 >   
      <div className="flex justify-center pb-8">
        <div className="tooltip mr-3" onMouseEnter={() => setHoverMessage('Python')} onMouseLeave={() => setHoverMessage('')}>
          <Link href="https://www.credly.com/badges/e1f8c8a8-2e0b-4716-a034-5a233a9c6b48/linked_in_profile">
            <a><Image src="/icons/aws-cert.png" width={50} height={50} alt="aws" /></a>
          </Link>
        </div>
        <div className="tooltip mr-3" onMouseEnter={() => setHoverMessage('Python')} onMouseLeave={() => setHoverMessage('')}>
          <Link href="https://www.credential.net/f0e91b5b-37a6-4257-b6cb-d983a8458e65?key=4bdeaa38e98b672109444214a4665b1a3d32836eceaefe2c1eb0969d8129a188">
            <a><Image src="/icons/gcp-cert.png" width={50} height={50} alt="gcp" /></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Aboutme: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me - Kota Portfolio</title>
      </Head>

      <main className="main-content">
        <ProfileSection />
        <SkillSection />
        <CertificationSection />
      </main>
    </>
  );
};

export default Aboutme;
