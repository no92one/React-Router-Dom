import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function AppLayout() {
  return <>
    <header>
      <Navbar />
    </header>

    <main>
      <Outlet />
    </main>
  </>
}
