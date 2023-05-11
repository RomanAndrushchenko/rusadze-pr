import { Layout } from "./layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";

import "./styles/index.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
