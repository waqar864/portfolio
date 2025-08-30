import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Real-World Results" title="Some  Of My Recent Projects" description="Here are a few design projects I've worked on recently. Want to see more? Email me." />
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project) => (
          <Card key={project.title} className=" px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
            
            <div className="lg:grid lg:grid-cols-2">
              <div>
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <span>{project.company}</span>
              <span>{project.year}</span>
              </div>
            
            <h3 className="font-serif text-2xl mt-2 md:text-4xl">{project.title}</h3>
            <hr className="vorder-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result, idx) => (
                
                <li className="flex gap-2 text-sm text-white/50 md:text-base" key={idx}>
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                  </li>

              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                <ArrowUpRightIcon className="size-4" />
                <span>Visit Live Site</span></button>
            </a>
            </div>
            <div>
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0" />
          </div>
          </div>
        </Card>
          
        ))}
      </div>
    </div>
  </section>;
};
