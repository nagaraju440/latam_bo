import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Section2/Cards";
import Notification from "./components/Section2/Notifications";
import Sidebar from "./components/Sidebar";
import { Dashbaord } from "./pages/Dashbaord";

function App() {
  return (
    <div>
      {/* <div  className='text-xl bg-green-500' >hello tailwind text</div> */}
      {/* <Notification />
      <Cards /> */}
      <Dashbaord/>

    </div>
  );
}

export default App;
