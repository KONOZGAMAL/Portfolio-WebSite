import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-center fixed bottom-2 w-[100%] z-10">
      <ul className="flex justify-center items-center gap-5 bg-[#3a6f9573] p-4 rounded-xl border-2 border-cyan-800">
        <li>
          <NavLink to={"/"}>
            <img src="./assets/wired-lineal-63-home.gif" alt="logo"
            className="text-transparent" height={'50px'}
            width={'50px'} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>
            <img src="./assets/wired-lineal-268-avatar-man.gif" alt="logo"
            className="text-transparent" height={'50px'}
            width={'50px'}/>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/skills"}>
            <img src="./assets/wired-lineal-153-bar-chart.gif" alt="logo" 
            className="text-transparent" height={'50px'}
            width={'50px'}/>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>
            <img
              src="./assets/wired-lineal-478-computer-display.gif"
              alt="logo"
             className="text-transparent"
              height={'50px'}
              width={'50px'}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cv"}>
            <img src="./assets/wired-lineal-245-edit-document.gif" alt="logo"
            className="text-transparent"  height={'50px'}
            width={'50px'} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
