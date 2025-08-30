import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: 'javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon ,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'chrome',
    iconType: ChromeIcon ,
  },
  {
    title: 'github',
    iconType: GithubIcon,
  }
]
const hobbies = [
  {
    title: 'Traveling',
    emoji: '🌍',
    left: "5%",
    top:"5%",
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: "50%",
    top:"5%",
  },
  {
    title: 'Cooking',
    emoji: '🍳',
    left: "10%",
    top:"35%",
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "55%",
    top:"40%",
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "45%",
    top:"70%",
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: "10%",
    top:"60%",}
];

export const AboutSection = () => {
  return <div className="py-20 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A bit more about me" description="I'm a passionate web designer with a knack for creating stunning, user-friendly websites that drive results. With a background in graphic design and a love for all things digital, I bring a unique blend of creativity and technical expertise to every project." />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books I've read and the insights I've gained along the way." />
            <div className="w-40 mx-auto mt-2 md:mt-0">
            <Image src={bookImage} alt="About Me" className="rounded-2xl mt-6 md:mt-0 md:ml-6 w-full md:w-1/2 lg:w-1/3" />
          </div>
          </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Explore the books I've read and the insights I've gained along the way." />

           <ToolBoxItems className="" items={toolboxItems} />
           <ToolBoxItems className="mt-6" itemsWrapperClassName="-translate-x-1/2" items={toolboxItems} />
          </Card>
          </div>
          <div className="grid gap-8 grid-col-1 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
          <CardHeader title="Beyond the code" description="Explore the books I've read and the insights I've gained along the way." className="" />

            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{ left: hobby.left, top: hobby.top }}
                >
                 
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                   <span className="">{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 p-1.5 after:content-[''] after:absolute after:inset-0 after:-outline-offset-2 after:rounded-full after:outline-green-950/30">
              <Image src={smileMemoji} alt="Smile Memoji" className="size-20" />
              </div>
              
          </Card>
          </div>
        </div>
  </div>
  </div>
};
