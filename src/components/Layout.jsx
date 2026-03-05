import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "30px" }}>
        <Outlet />
      </div>
    </>  
  );
}

export default Layout;