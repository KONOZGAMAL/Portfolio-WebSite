import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Layouts from "./Layouts/Layouts"
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        { path: "/", element: <Home/> },
        { path: "/about", element: <About/> },
        { path: "/projects", element: <Projects/> },
        { path: "/skills", element: <Skills/> },
        { path: "/contact", element: <Contact/> },
      ],
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
