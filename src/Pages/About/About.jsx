import { FiDownload } from "react-icons/fi";
export default function About() {
  return (
    <div className="relative lg:top-[-120px] mb-[80px] lg:mb-5">
      <div className="container mx-auto px-5 md:px-14 justify-center items-center lg:items-start gap-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="md:w-[70%] tracking-wider px-3  mx-auto text-2xl text-center leading-10 text-[#5ba9ab] ">
            I'm a Front-End Developer with knowledge in designing, developing,
            and deploying web applications using HTML5, CSS3, Bootstrap,
            Tailwind CSS, JavaScript,TypeScript, React JS , NextJs and Seeking a
            challenging opportunity as a Software Engineer in a company with a
            good reputation that will add to my Knowledge, Skills, and
            Experience on a day-to-day basis.
          </p>
          <div className="flex items-center flex-col lg:flex-row justify-center gap-2 mx-auto">
            <div>
              <img
                src="./assets/man_working.png"
                alt="man"
                style={{ color: "transparent" }}
              />
            </div>
            <ul className="flex justify-start flex-col gap-2 p-4 w-full md:w-[70%]">
              <li
                className="flex gap-3 items-center text-[#3e6e6f]
            text-lg md:text-xl text-wrap"
              >
                <img
                  src="./assets/wired-lineal-268-avatar-man.gif"
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={"50px"}
                  width={"50px"}
                />
                Konuz Gamal Mohammed
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap text-[#3e6e6f]">
                <img
                  src="./assets/wired-lineal-18-location-pin.gif"
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={"50px"}
                  width={"50px"}
                />
                Egypt
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap text-[#3e6e6f]">
                {" "}
                <img
                  src="./assets/wired-lineal-1676-telephone-call-hand.gif"
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={"50px"}
                  width={"50px"}
                />
                01095092803
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap text-[#3e6e6f]">
                {" "}
                <img
                  src="./assets/wired-lineal-1141-email.gif"
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={"50px"}
                  width={"50px"}
                />
                konuzgamal12gmail.com
              </li>
              <li className="flex gap-3 items-center text-lg md:text-xl text-wrap text-[#3e6e6f]">
                <img
                  src="./assets/wired-lineal-245-edit-document.gif"
                  alt="logo"
                  style={{ color: "transparent" }}
                  height={"50px"}
                  width={"50px"}
                />
                <a
                  download="Resume.pdf"
                  href="./Resume.pdf"
                  className="flex items-center gap-2"
                >
                  Download CV <FiDownload />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
