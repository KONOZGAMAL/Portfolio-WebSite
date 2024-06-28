import { FiDownload } from "react-icons/fi";

export default function Cv() {
  return (
    <>
    <div className="w-full h-[50vh] flex justify-center items-center text-1xl">
      <a
        download="Resume.pdf"
        href="./Resume.pdf"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full tracking-wider"
      >
      Download CV <FiDownload />
      </a>
    </div>
  </>
  )
}
