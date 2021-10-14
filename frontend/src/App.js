import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Features from "./components/Features";
import Equine_Services from "./components/Equine_Services_Page";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-20">
        <Container>
          <Route path="/" component={Features} exact />
          <Route path="/Equine_Services" component={Equine_Services} exact />

        </Container>
      </main>
    </Router>
  );
}

export default App;
