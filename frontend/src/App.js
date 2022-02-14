import { Container } from "react-bootstrap";
import * as React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/basicpages/Header";
import Footer from "./components/basicpages/Footer";
import Home from "./components/basicpages/homepage";
import Equine_Services from "./components/basicpages/Equine_Services_Page";
import Farm_Services from "./components/basicpages/Farm_Animal_Services_Page.js";
import Small_Services from "./components/Small_Animal_Services_Page.js";
import New_Client from "./components/NewClient";
import ContactUs from "./components/basicpages/ContactUs";
import Events from "./components/basicpages/Events.js";
import Staff from "./components/staff.js";
import Lameness from "./components/Horse_Service_Avalible/Lameness.js";
import Podiatry from "./components/Horse_Service_Avalible/Podiatry";
import Castration from "./components/Horse_Service_Avalible/Castration";
import NaturalDentistry from "./components/Horse_Service_Avalible/NaturalDentistry";
import WormingProgram from "./components/Horse_Service_Avalible/WormingProgram";
import InternalMedicine from "./components/Horse_Service_Avalible/InternalMedicine";
import BodyWork from "./components/Horse_Service_Avalible/BodyWork";
import Microchipping from "./components/Horse_Service_Avalible/Microchipping";
import EndofLifeCare from "./components/Horse_Service_Avalible/EndofLifeCare";
import Appointments from "./components/Horse_Service_Avalible/AppointmentTypes";
import WellnessExams from "./components/Horse_Service_Avalible/WellnessExams";
import PrePurchaseExams from "./components/Horse_Service_Avalible/Pre-PurchaseExams";
import EquineFirstAid from "./components/Horse_Service_Avalible/EquineFirstAid";
import BehaviorConsultations from "./components/Horse_Service_Avalible/BehaviorConsultations";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      
      <Header />
      <ScrollToTop />
      <div id="main"> 
      <main className="py-20">
          <Route path="/" component={Home} exact />
          <Route path="/Equine_Services" component={Equine_Services} exact />
          <Route path="/Farm_Services" component={Farm_Services} exact />
          <Route path="/Small_Animal_Services" component={Small_Services} exact />
          <Route path="/New_Client" component={New_Client} exact />
          <Route path="/Contact" component={ContactUs} exact />
          <Route path="/Events" component={Events} exact />
          <Route path="/Staff" component={Staff} exact />
          {/* equine pages */}
          <Route path="/Equine_Services/LamenessInvestigation" component={Lameness} exact />
          <Route path="/Equine_Services/AppointmentsTypes" component={Appointments} exact />
          <Route path="/Equine_Services/WellnessExams" component={WellnessExams} exact />
          <Route path="/Equine_Services/PrePurchaseExams" component={PrePurchaseExams} exact />
          <Route path="/Equine_Services/EquineFirstAid" component={EquineFirstAid} exact />
          <Route path="/Equine_Services/BehaviorConsultations" component={BehaviorConsultations} exact />
          <Route path="/Equine_Services/Castration" component={Castration} exact />
          <Route path="/Equine_Services/NaturalDentistry" component={NaturalDentistry} exact />
          <Route path="/Equine_Services/WormingProgram" component={WormingProgram} exact />
          <Route path="/Equine_Services/InternalMedicine" component={InternalMedicine} exact />
          <Route path="/Equine_Services/BodyWork" component={BodyWork} exact />
          <Route path="/Equine_Services/Microchipping" component={Microchipping} exact />
          <Route path="/Equine_Services/EndofLifeCare" component={EndofLifeCare} exact />
          <Route path="/Equine_Services/Podiatry" component={Podiatry} exact />


      </main>
      
      </div>
      <Footer />
    </Router>
  );
}

export default App;
