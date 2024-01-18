import Head from "next/head";
import Link from "next/link"

interface IProjectsContents {
    title: string,
    contents: string,
    link: string,
    techStack: string[]
}

const projectsContents: IProjectsContents[] = [
    {
        title: "Nishiki",
        contents: "Nishiki manages the inventory of your fridge for both you and your partner. I developed a frontend component with Authentication with AWS amplify and Amazon Cognito.",
        link: "https://github.com/genesis-tech-tribe/nishiki-frontend",
        techStack: ["Next.js", "Amazon Cognito", "Radix", "TypeScript","React.js","AWS"]
    },
    {
        title: "Messaging Bot Integration with Kubernetes(GKE)",
        contents: "I created a system small messaging bot from scratch using Kubernetes on GKE. I built with each Kubernetes object so I could get a full sense of the system hosted by Kubernetes.",
        link: "https://github.com/kotaaaa/linebot",
        techStack: ["Python", "Kubernetes", "GCP"]
    },
    {
        title: "Research About NLP and AI",
        contents: "In graduate school, I engaged in research on natural language processing and published my achievement at peer-reviewed international conferences. ",
        link: "https://dl.acm.org/doi/10.1145/3358695.3360931",
        techStack: ["NLP", "AI", "Python"]
    }
]

const ProjectItem = ({ content }: {
    content: IProjectsContents;
}) => {
    return (
        <>
            <h3 className="py-2 text-3xl underline">
                {content.title}
            </h3>
            <p className="py-2">
                {content.contents}
            </p>
            <p className="py-2">
                {content.techStack.map((name, idx) => (
                    <span
                        key={`techStack-${name}`}
                        className="text-base font-medium inline-block py-1 px-1.5 mx-1 rounded-3xl text-blue-600 bg-blue-100 last:mr-0 mr-1"
                    >
                        {name}
                    </span>
                ))}
            </p>
            <Link href={content.link}>
                <a className="py-2 hover:underline hover:cursor-pointer">
                    more..
                </a>
            </Link>
        </>
    );
};

const ProjectsList = ({ projectsContents }: { projectsContents: IProjectsContents[] }) => {
    return (
        <div className="py-6">
            {projectsContents.map((content: IProjectsContents, index: number) => (
                <ProjectItem key={`project-${index}`} content={content} />
            ))}
        </div>
    );
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects - Kota Portfolio</title>
            </Head>
            <section className="bg-white h-fit py-8">
                <div className="py-8 mx-auto max-w-md md:max-w-screen-md content-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-black text-center text-gray-90">
                        Projects
                    </h2>
                    <ProjectsList projectsContents={projectsContents}/>
                </div>
            </section>
        </>
    );
}

export default Projects
