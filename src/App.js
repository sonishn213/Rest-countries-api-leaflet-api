import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
