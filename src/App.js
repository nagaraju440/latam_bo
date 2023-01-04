import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Section2/Cards";
import Notification from "./components/Section2/Notifications";
import Sidebar from "./components/Sidebar";
import { Dashbaord } from "./pages/Dashbaord";
import HeaderLayout from './HeaderLayout/HeaderLayout';
import Section2 from './Section2/Section2';
import EditComponent from './EditComponent/EditComponent';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <HeaderLayout></HeaderLayout>
      <Section2></Section2>
      <EditComponent></EditComponent>
      </div>
  )
    }

export default App;
