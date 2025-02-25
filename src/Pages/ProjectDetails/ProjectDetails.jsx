import { FaCode } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import projecyData from "../Projects/Data";
export default function ProjectDetails() {
  const { id } = useParams();
  return (
    <div className="container mx-auto p-3">
      {projecyData.map(
        (item) =>
          item.id === id && (
            <div
              key={item.id}
              className="flex items-center justify-start flex-col text-2xl gap-4 text-white px-10 md:20"
            >
              <div className="w-full flex gap-4 flex-wrap">
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-2 text-[15px] bg-orange-400 w-fit py-2 px-4 cursor-pointer"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  className="flex items-center gap-2 text-[15px] bg-orange-400 w-fit py-2 px-4 cursor-pointer"
                >
                  Code <FaCode />
                </a>
              </div>
              <div className="w-full">
                <span className="text-gray-500 text-[17px]">PROJECT</span>
                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-[15px] md:text-[17px]">{item.details}</p>
              </div>
              <div className="m-16 text-center">
                <p className="p-4">TOOLS</p>
                <div className="flex justify-center flex-wrap items-center text-2xl gap-4 text-white">
                  {item.tools.map((e, index) => (
                    <p className="btn" key={index}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
