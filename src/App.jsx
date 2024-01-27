import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import "./assets/styles/main2.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AgentInfo from "./pages/AgentInfo";
import AreaCode from "./pages/AreaCode";
import CreateCampaign from "./pages/CreateCampaign";
import DealTrackAgent from "./pages/DealTrackAgent";
import FIAgent from "./pages/FIAgent";
import FindCar from "./pages/FindCar";
import LeadPage from "./pages/LeadPage";
import SMSCampaign from "./pages/SMSCampaign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent-info" element={<AgentInfo />} />
        <Route path="/area-code" element={<AreaCode />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/deal-track-agent" element={<DealTrackAgent />} />
        <Route path="/FIA-agent" element={<FIAgent />} />
        <Route path="/find-car" element={<FindCar />} />
        <Route path="/lead-page" element={<LeadPage />} />
        <Route path="/sms-campaign" element={<SMSCampaign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
