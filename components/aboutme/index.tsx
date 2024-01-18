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
            <p className="text-center text-2xl py-1 font-bold"> Kota Kawaguchi </p>
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
          <p className="py-4 lg:mb-10 font-light text-left text-gray-500 sm:text-xl">
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
  content: string;
  certificate?: string
  certificateLogo?: string
};

type IconListProps = {
  icons: Icon[];
};

const programmingLanguage: Icon[] = [
  { src: "/icons/python.svg", label: "Python", content: "Experienced for 5+ years. I mainly started writing Python for Web application development with Django. and then, NLP Research with Pandas, numpy, sklearn framework when I was a master student. I attended to Internship program as Yahoo! Japan research to analyze user generated data; user log or text data from Twitter, and used Python. In addition, I created workflow with Apache Airflow and APIs with Flask." },
  { src: "/icons/typescript.svg", label: "Typescript", content: "Experienced for 3+ years, Added some component with React and Angular and unit test code with Jest for e-commerce site and company’s internal tool with authentication function. In addition, I created Next.js v14 app from scratch with Typescript and Jest." }, 
  { src: "/icons/java.svg", label: "Java", content: "Experienced for 2+ years, established a robust backend system of e-commerce site with SpringBoot by utilizing Controller-Service-Repository pattern. And developed batch system with SpringBatch by utilizing Template design pattern from System Design Pattern. I am familiar with package management tool such as Gradle." },
];

const frameworks: Icon[] = [
  { src: "/icons/fastapi.svg", label: "FastAPI", content: "Experienced for 1+ years, FastAPI is my favorite api framework for Python as easy to set up a server, include type definitions, implement asynchronous communication and highly extensible. And also we can output API documentation by default." },
  { src: "/icons/react.svg", label: "React", content: "Experienced for 2+ years. Created component with react hook such as useState, useRouter, useEffect, and context. In order to create SSR based app, utilized Next.js for routing and caching. This site is also built with Next.js (2024, Jan)." },
  { src: "/icons/springboot.svg", label: "SpringBoot", content: "Experienced for 2+ years. We used it for back-end services for our internal tools. Annotation with lombok. I have created a robust backend API by utilizing Controller-Service-Repository pattern." },
  { src: "/icons/airflow.svg", label: "Apache Airflow", content: "Experienced for 2+ years. used Apache Airflow to create a workflow in order to connect with external APIs from other retail companies. Completed integrations with several APIs such as the Shopify API, including interfaces to RESTfulAPI and GraphQL, and led the project to upgrade Airflow from version 1.x to series 2.x" },
  { src: "/icons/vue.svg", label: "Vue", content: "Experienced for 2+ years, added some component for item detail page. As global data management library, Vuex was used. For SSR, we used Nuxt.js for entire app." },
];

const cloud: Icon[] = [
  { src: "/icons/aws.svg", label: "Amazon Web Service", content: "Experienced for 2+ years. I have used Amazon SQS, Amazon S3, and EKS when creating APIs for external customers with authentication to manage internal providers. Experienced in production logging, including checking AWS ALB logs and issuing SQL against logs from AWS Athena to monitor customer facing APIs. In addition, I have developed green field development of front-end login and API authentication functionality using Amazon Cognito and AWS amplify. I am a certified AWS Solutions Architect – Associate.", certificate: "https://www.credly.com/badges/e1f8c8a8-2e0b-4716-a034-5a233a9c6b48/linked_in_profile", certificateLogo: "/icons/aws-cert.png" },
  { src: "/icons/gcp.svg", label: "Google Cloud", content: "Experienced for 2+ years. I have experience developing back-end batch applications using Cloud Composer (Apache Airflow). We have developed a system to periodically synchronize data from external APIs to our marketplace. I have also developed APIs using Flask and Cloud Run, and created automated processes for API calls using Google App Script, Cloud Scheduler, and Cloud Function. I am a certified GCP Associate Cloud Engineer.", certificate: "https://www.credential.net/f0e91b5b-37a6-4257-b6cb-d983a8458e65?key=4bdeaa38e98b672109444214a4665b1a3d32836eceaefe2c1eb0969d8129a188", certificateLogo: "/icons/gcp-cert.png" },
]

const middleware: Icon[] = [
  { src: "/icons/kubernetes.svg", label: "Kubernetes", content: "Experienced for 3+ years. Kubernetes was used to run more than 15 services in production, with experience scaling out and scaling down PODs in production. I am familiar with Kubernetes services such as Deployment, Service, Configmap, etc. I have also created my own simple service using Kubernetes from scratch to deepen my understanding." },
  { src: "/icons/datadog.svg", label: "Datadog", content: "Experienced for 3+ years. I have created a dashboard to view APMs such as CPU, Memory, Latency, etc. in Datadog. I also used Datadog for load testing and production resource monitoring, and added a setting to send slack notifications when anomalous values occur. We also used Datadog's Log explorer feature to monitor API logs." },
  { src: "/icons/linux.svg", label: "Linux", content: "Experienced for 5+ years. I have been working with Linux servers since I was a university student and have worked with debian and ubuntu servers. I am experienced in monitoring server resources using top command, etc. I am also good at simple text processing using awk, sort, uniq, etc." },
  { src: "/icons/jenkins.svg", label: "Jenkins", content: "Experienced for 2+ years. I created CI/CD for Blue/Green deployments using Jenkins for deploying API applications and batch applications. I also used Jenkins to automate manual tasks on production on-premise servers, such as changing Nginx upstream, etc." },
  { src: "/icons/nginx.svg", label: "Nginx", content: "Experienced for 2+ years. Nginx was used for the production web server, and I worked through the upstream and server configurations to change the direction to the backend API." },
  { src: "/icons/looker.svg", label: "Looker" , content: "We used Looker to create dashboards of table data in conjunction with BigQuery tables. Specifically, I created Model and View files for each dashboard." },  
];

const IconList = ({ icons }: IconListProps) => {  
  return (
    <>
      {icons.map((icon, index) => (
        <div key={index} className="relative group hover:cursor-pointer p-10 flex flex-col items-center text-left gap-2">
          <div className="flex items-center space-x-4">
            <Image src={icon.src} width={100} height={100} alt={icon.label} />
            {icon.certificate && (
              <Link href={icon.certificate}>
                <a>
                  <Image src={icon.certificateLogo!} width={50} height={50} alt={`${icon.label} certificate`} />
                </a>
              </Link>
            )}
          </div>
          <p className=''>{icon.label}</p>
          <p>{icon.content}</p>

          <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 bottom-full bg-gray-700 text-white text-normal px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            {icon.label}
          </span>
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
      <p className="py-2 mb-2 text-3xl tracking-tight text-center text-gray-900">
        Programming Language
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 content-center justify-center">
        <IconList icons={programmingLanguage} />
      </div>
      <p className="py-2 mb-2 text-3xl tracking-tight text-center text-gray-900">
        Framework
      </p >   
      <div className="grid grid-cols-1 md:grid-cols-3 content-center justify-center">
        <IconList icons={frameworks} />
      </div>
      <p className="py-2 mb-2 text-3xl tracking-tight text-center text-gray-900">
        Cloud
      </p >
      <div className="grid grid-cols-1 md:grid-cols-2 content-center justify-center">
        <IconList icons={cloud} />
      </div>
      <p className="py-2 mb-2 text-3xl tracking-tight text-center text-gray-900">
        Middleware / Others
      </p >   
      <div className="grid grid-cols-1 md:grid-cols-3 content-center justify-center">
        <IconList icons={middleware}/>
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
      </main>
    </>
  );
};

export default Aboutme;
