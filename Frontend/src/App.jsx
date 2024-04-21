import MainRoutes from "./Routes/MainRoutes";

import Login from "./Routes/Login";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainRoutes></MainRoutes>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
