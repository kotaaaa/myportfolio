import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFile, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Aboutme: NextPage = () => {
  const profileImg = "/profile.jpg";
  const linkedinUrl = "https://www.linkedin.com/in/kota1110/";
  const gitHubUrl = "https://github.com/kotaaaa";
  const researchUrl = "https://kotaaaa.github.io/rhp/";


  return (
    <>
      <Head>
        <title>About me - Kota Portfolio</title>
      </Head>

      <section className="bg-white dark:bg-gray-900 py-8">
        <div className="md:basis-3/12 mt-12 flex content-center justify-center">
          <Image
            className="rounded-full"
            src={profileImg}
            alt="me"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="dark:text-gray-400">
          <div className="py-4">
            <p className="text-center text-4xl py-1">Hey, It's Kota 👋</p>
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
          <p className="py-4 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Hi! I am Kota Kawaguchi who is Software Developer <br /> with 4+ years experience living in <strong>Vancouver</strong>. 
            <br/>
            My expertise field is <strong>Backend</strong> / <strong>DevOps</strong> / <strong>Cloud</strong> / <strong>Full Stack</strong>.
          </p>
        </div>
        <div className="mx-auto max-w-screen-md justify-center content-center">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-400">
            Techs
          </h1 >
          <p className="py-2 mb-2 text-2xl tracking-tight text-center text-gray-900 dark:text-gray-400">
            Programming Language
          </p >
          <div className="flex content-center justify-center">
            <div className="mr-3">
              <Image src="/icons/python.svg" width={50} height={50} alt="python" />
            </div>
            <div className="mr-3">
              <Image src="/icons/typescript.svg" width={50} height={50} alt="typescript" />
            </div>
            <div className="mr-3">
              <Image src="/icons/java.svg" width={50} height={50} alt="java" />
            </div>
          </div>
          <p className="py-2 mb-2 text-2xl tracking-tight text-center text-gray-900 dark:text-gray-400">
            Framework
          </p >   
          <div className="flex content-center justify-center">
            <div className="mr-3">
              <Image src="/icons/react.svg" width={50} height={50} alt="react" />
            </div>
            <div className="mr-3">
              <Image src="/icons/vue.svg" width={50} height={50} alt="vue" />
            </div>
            <div className="mr-3">
              <Image src="/icons/fastapi.svg" width={50} height={50} alt="fastapi" />
            </div>
            <div className="mr-3">
              <Image src="/icons/airflow.svg" width={50} height={50} alt="airflow" />
            </div>
            <div className="mr-3">
              <Image src="/icons/springboot.svg" width={50} height={50} alt="springboot" />
            </div>
          </div>
          <p className="py-2 mb-2 text-2xl tracking-tight text-center text-gray-900 dark:text-gray-400">
            Cloud
          </p >
          <div className="flex content-center justify-center">
            <div className="mr-3">
              <Image src="/icons/aws.svg" width={50} height={50} alt="aws" />
            </div>
            <div className="mr-3">
              <Image src="/icons/gcp.svg" width={50} height={50} alt="gcp" />
            </div>
          </div>
          <p className="py-2 mb-2 text-2xl tracking-tight text-center text-gray-900 dark:text-gray-400">
            Middleware / Others
          </p >   
          <div className="flex content-center justify-center">
            <div className="mr-3">
              <Image src="/icons/terraform.svg" width={50} height={50} alt="terraform" />
            </div>
            <div className="mr-3">
              <Image src="/icons/kubernetes.svg" width={50} height={50} alt="kubernetes" />
            </div>
            <div className="mr-3">
              <Image src="/icons/jenkins.svg" width={50} height={50} alt="jenkins" />
            </div>
            <div className="mr-3">
              <Image src="/icons/looker.svg" width={50} height={50} alt="looker" />
            </div>
            <div className="mr-3">
              <Image src="/icons/nginx.svg" width={50} height={50} alt="nginx" />
            </div>
            <div className="mr-3">
              <Image src="/icons/datadog.svg" width={50} height={50} alt="datadog" />
            </div>
            <div className="mr-3">
              <Image src="/icons/linux.svg" width={50} height={50} alt="linux" />
            </div>
          </div>
          <h1 className="py-2 mt-12 mb-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-400">
            Certification
          </h1 >   
          <div className="flex content-center justify-center">
            <div className="mr-3">
              <Link href="https://www.credly.com/badges/e1f8c8a8-2e0b-4716-a034-5a233a9c6b48/linked_in_profile">
                <a><Image src="/icons/aws-cert.png" width={50} height={50} alt="aws" /></a>
              </Link>
            </div>
            <div className="mr-3">
              <Link href="https://www.credential.net/f0e91b5b-37a6-4257-b6cb-d983a8458e65?key=4bdeaa38e98b672109444214a4665b1a3d32836eceaefe2c1eb0969d8129a188">
                <a><Image src="/icons/gcp-cert.png" width={50} height={50} alt="gcp" /></a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
