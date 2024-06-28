import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Landing from "../Components/Landing/Landing";
import SocialLinks from "../Components/SocialLinks/SocialLinks";

export default function Layouts() {
  return (
    <div>
      <Landing>
        <NavBar />
        <Outlet />
        <SocialLinks />
      </Landing>
    </div>
  );
}
