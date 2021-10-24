import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Equine_Services from "./components/Equine_Services_Page";
import Lameness from "./components/Horse_Service_Avalible/Lameness.js";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-20">
        <Container>
          <Route path="/" component={Features} exact />
          <Route path="/Equine_Services" component={Equine_Services} exact />
          <Route path="/Equine_Services/LamenessInvestigation" component={Lameness} exact />

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
