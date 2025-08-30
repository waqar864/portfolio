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

const toolboxItems = [
  {
    title: 'javascript',
    icon: <JavascriptIcon />,
  },
  {
    title: 'HTML5',
    icon: <HtmlIcon />,
  },
  {
    title: 'CSS3',
    icon: <CssIcon />,
  },
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'chrome',
    icon: <ChromeIcon />,
  },
  {
    title: 'github',
    icon: <GithubIcon />,
  }
]

export const AboutSection = () => {
  return <div className="pb-96">
      <SectionHeader eyebrow="About Me" title="A bit more about me" description="I'm a passionate web designer with a knack for creating stunning, user-friendly websites that drive results. With a background in graphic design and a love for all things digital, I bring a unique blend of creativity and technical expertise to every project." />
        <div>
          <Card>
            <div>
              <StarIcon />
              <h3>Passionate about Design</h3>
              <p>I believe that great design is more than just aesthetics; it's about creating meaningful experiences that resonate with users and drive engagement.</p>
            </div>
            <Image src={bookImage} alt="About Me" className="rounded-2xl mt-6 md:mt-0 md:ml-6 w-full md:w-1/2 lg:w-1/3" />
          </Card>
              <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
            </div>
           <div>
            {toolboxItems.map((item) => (
              <div key={item.title} className="">
                <div className="">
                  {item.icon}
                </div>
                <span className="">{item.title}</span>
              </div>
            ))}
           </div>
          </Card>
        </div>
  </div>;
};
