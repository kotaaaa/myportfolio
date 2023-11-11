import Head from "next/head";
import Link from "next/link"

interface IProjectsContents {
    title: string,
    contents: string,
    link: string,
    techStack: string[]
}

interface IProjectsListProps {
    projectsContents: IProjectsContents[];
}

const ProjectsList = ({ projectsContents }: IProjectsListProps) => {
    return (
        <div className="py-6">
            {projectsContents.map((content: IProjectsContents) => {
                return (
                    <>
                        <h3 className="py-2 text-3xl underline">
                            {content.title}
                        </h3>
                        <p className="py-2">
                            {content.contents}
                        </p>
                        <p className="py-2">{content.techStack.map((name: String, idx: number) => {
                            return (
                                <span
                                    key={`techStack-${name}-${idx}`}
                                    className="text-base font-medium inline-block py-1 px-1.5 mx-1 rounded-3xl text-blue-600 bg-blue-100 last:mr-0 mr-1"
                                >
                                    {name}
                                </span>
                            );
                        })}
                        </p>
                        <Link href={content.link}>
                            <p className="py-2 hover:underline hover:cursor-pointer">
                                more..
                            </p>
                        </Link>
                    </>
                )
             })}

        </div>
    );
}

const projectsContents: IProjectsContents[] = [
    {
        title: "Messaging Bot Integration with Kubernetes(GKE)",
        contents: "Simple TODO management bot with Kubernetes Cluster",
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
