import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
export default function SocialLinks() {
  return (
    <ul className="fixed left-2 z-10 top-[40%]">
      <li className="text-3xl hover:opacity-40 text-blue-600 py-1 text-[34px]">
        <Link
          to={
            "https://www.linkedin.com/in/konuz-gamal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li className="text-3xl hover:opacity-40 text-secondary py-1 text-[34px]">
        <Link to={"http://github.com/KONOZGAMAL"} target="_blank">
          <FaSquareGithub />
        </Link>
      </li>
      <li className="text-3xl hover:opacity-40 text-green-600 py-1 text-[34px]">
        <Link
          to={
            "https://api.whatsapp.com/send/?phone=2001114752381&text&type=phone_number&app_absent=0"
          }
          target="_blank"
        >
          <FaSquareWhatsapp />
        </Link>
      </li>
      <li className="text-3xl hover:opacity-40 text-blue-500 py-1 text-[34px]">
        <Link
          to={
            "https://www.facebook.com/profile.php?id=100038599728019&mibextid=ZbWKwL"
          }
          target="_blank"
        >
          <FaSquareFacebook />
        </Link>
      </li>
    </ul>
  );
}
