import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import ProgressBar from "./progressbar";

export default function Competences() {
  const [src, setSrc] = useState("bulbusaur.gif");
  function change_pokemon(pokemon: string) {
    setSrc(pokemon);
  }
  const [ref, inView] = useInView({ threshold: 0.7 });
  useEffect(() => {
    {
      inView ? document.getElementById("Apropos")?.focus() : undefined;
    }
  }, []);

  return (
    <div id="competences">
      <h1 className="text-6xl text-bold ml-[4.7%]"> Compétences </h1>{" "}
      <Tab.Group>
        <Tab.List className="mt-[5%] ml-[5%] flex flex-row gap-4  md:gap-32 lg:gap-40">
          <Tab
            id="test"
            className={`PressStart text-[10px] md:text-xl  text-green-500 focus:text-black focus:outline-none ${
              src === "bulbusaur.gif" ? "underline underline-offset-4" : ""
            }`}            
            onClick={() => change_pokemon("bulbusaur.gif")}
          >
            Frameworks
          </Tab>
          <Tab
            className={`PressStart text-[10px] md:text-xl  text-red-500 focus:text-black focus:outline-none ${
              src === "charmander.gif" ? "underline underline-offset-4" : ""
            }`}              
            onClick={() => change_pokemon("charmander.gif")}
          >
            Langages
          </Tab>
          <Tab
            className={`PressStart text-[10px] md:text-xl  text-blue-500 focus:text-black focus:bg-clip-text focus:outline-none ${
              src === "squirtle.gif" ? "underline underline-offset-4" : ""
            }`}             
            onClick={() => change_pokemon("squirtle.gif")}
          >
            Autres
          </Tab>
        </Tab.List>
        <div className="flex">
          <Tab.Panels className="ml-10 mt-10 w-[50%]">
            <Tab.Panel className="flex_competences">
              <ProgressBar name="Tailwind" progress="80" />
              <ProgressBar name="React.JS" progress="80" />
              <ProgressBar name="Next.JS" progress="60" />
              <ProgressBar name="Flutter" progress="40" />
            </Tab.Panel>

            <Tab.Panel className="flex_competences">
              <ProgressBar name="Typescript" progress="80" />
              <ProgressBar name="Python" progress="80" />
              <ProgressBar name="HTML/CSS" progress="80" />
              <ProgressBar name="PHP" progress="60" />
              
            </Tab.Panel>
            <Tab.Panel className="flex_competences">
              <ProgressBar name="MySQL" progress="80" />
              <ProgressBar name="Prisma" progress="80" />
              <ProgressBar name="Git" progress="80" />
              <ProgressBar name="Bash" progress="60" />
            </Tab.Panel>
          </Tab.Panels>
          <img
          className="ml-[20%]"
          width={300}
            src={src}
            alt="Image of one of the first starters of pokemon depending on which tab panel you click on"
          ></img>
        </div>
      </Tab.Group>
      <h1 className="mb-[400px]"></h1>
    </div>
  );
}
