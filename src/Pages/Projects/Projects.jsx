import "./Projects.css";
import projecyData from "./Data";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [typePro, setTypePro] = useState("all");
  const handleBtn = (type) => {
    setTypePro(type);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-wrap items-center text-2xl gap-4 text-white">
        <p
          className={typePro == "all" ? "btn active" : "btn"}
          onClick={() => handleBtn("all")}
        >
          All
        </p>
        <p
          className={typePro == "react" ? "btn active" : "btn"}
          onClick={() => handleBtn("react")}
        >
          ReactJs
        </p>
        <p
          className={typePro == "js" ? "btn active" : "btn"}
          onClick={() => handleBtn("js")}
        >
          Javascript
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center items-center
      text-2xl text-white mt-5 w-full  md:w-[63%] h-[auto] mx-auto"
      >
        {projecyData.map(
          (items) =>
            (typePro == "all" || items.type == typePro) && (
              <div
                className="cartProject border p-4 sm:w-full lg:w-1/3 relative"
                key={items.id}
              >
                <Link
                  to={`/projects/${items?.id}`}
                  className="image_project relative w-[280px] md:w-full
                  h-[250px] max-h-[400px] inline-flex items-center justify-center
                  rounded-md bg-white overflow-hidden border-2 border-cyan-700"
                >
                  <img src={items.img} alt="project" className="image w-full" />
                  <div className="mainClass">
                    <div className="flex items-center justify-center text-slate-950">
                      See More
                    </div>
                  </div>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}
