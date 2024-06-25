import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ColorContrast from "./pages/ColorContrast.jsx";
import MissingAltText from "./pages/MissingAltText.jsx";
import KeyboardNavigation from "./pages/KeyboardNavigation.jsx";
import FormLabels from "./pages/FormLabels.jsx";
import HeadingStructure from "./pages/HeadingStructure.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/color-contrast" element={<ColorContrast />} />
        <Route path="/missing-alt-text" element={<MissingAltText />} />
        <Route path="/keyboard-navigation" element={<KeyboardNavigation />} />
        <Route path="/form-labels" element={<FormLabels />} />
        <Route path="/heading-structure" element={<HeadingStructure />} />
      </Routes>
    </Router>
  );
}

export default App;