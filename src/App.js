import Mst from "./pages/Mst";
import MstMy from "./pages/MstMy";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex justify-center">
        <Routes>
          <Route path="*" element={<Mst />} />
          <Route path="Mst" element={<MstMy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;