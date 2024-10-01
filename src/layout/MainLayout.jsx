import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLaout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLaout;
