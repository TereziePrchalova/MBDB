import Bli from "./pages/Bli";
import Mst from "./pages/Mst";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spr from "./pages/Spr";

function App() {
  return (
    <Router>
      <div className="flex justify-center mx-auto xl:max-w-[1440px]">
        <Routes>
          <Route path="*" element={<Mst />} />
          <Route path="/bli" element={<Bli />} />
          <Route path="/spr" element={<Spr />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;