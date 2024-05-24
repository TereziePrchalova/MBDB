import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bli from "./pages/Bli";
import Mst from "./pages/Mst";
import Spr from "./pages/Spr";
import Itc from "./pages/Itc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Mst />} />
        <Route path="/bli" element={<Bli />} />
        <Route path="/spr" element={<Spr />} />
        <Route path="/itc" element={<Itc />} />
      </Routes>
    </Router>
  );
}

export default App;