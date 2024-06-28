import "./Projects.css";
import projecyData from "./Data";
import { useState } from "react";

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
      <div className="flex flex-wrap justify-center items-center
       text-2xl text-white mt-5 w-full  md:w-[63%] h-[auto] mx-auto">
        {projecyData.map(
          (items) =>
            (typePro == "all" || items.type == typePro) && (
              <div
                className="cartProject border p-4 sm:w-full lg:w-1/3 relative"
                key={items.id}
              >
                <a
                  href={items.link}
                  target="_blank"
                  className="image_project relative w-[280px] md:w-full
                  h-[250px] max-h-[400px] inline-flex items-center justify-center
                  rounded-md bg-white overflow-hidden border-2 border-cyan-700"
                >
                  <img src={items.img} alt="project" className="image w-full" />
                </a>
              </div>
            )
        )}
      </div>
    </div>
  );
}
/*
          <POPUP className="img-content relative">
              <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={data.img}
                  alt={data.title}
                  className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>







              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
*/