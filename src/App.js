import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Section1/Card";
import Slider from "./components/Section1/Slider";
import Cards from "./components/Section2/Cards";
import Notification from "./components/Section2/Notifications";
import Sidebar from "./components/Sidebar";
import { Dashbaord } from "./pages/Dashbaord";

function App() {
    return (
        <div className="App">
            {/* <Dashbaord/> */}
            <Card/>
            {/* <Cards/> */}
            {/* <Notification/> */}
            <Slider/>
        </div>
    );
}

export default App;
