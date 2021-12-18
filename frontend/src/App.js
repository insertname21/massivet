import { Container } from "react-bootstrap";
import * as React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Equine_Services from "./components/Equine_Services_Page";
import Farm_Services from "./components/Farm_Animal_Services_Page.js";
import Small_Services from "./components/Small_Animal_Services_Page.js";
import New_Client from "./components/NewClient";
import ContactUs from "./components/ContactUs";
import Events from "./components/Events.js";
import Staff from "./components/staff.js";
import Lameness from "./components/Horse_Service_Avalible/Lameness.js";
import Appointments from "./components/Horse_Service_Avalible/AppointmentTypes";
import WellnessExams from "./components/Horse_Service_Avalible/WellnessExams";
import PrePurchaseExams from "./components/Horse_Service_Avalible/Pre-PurchaseExams";

function App() {

  
  return (
    <Router>
      <Header />
      <div id="main"> 
      <main className="py-20">
        
          <Route path="/" component={Features} exact />
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

      </main>
      
      </div>
      <Footer />
    </Router>
  );
}

export default App;
