import Mst from "./pages/Mst";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex justify-center">
        <Routes>
          <Route path="*" element={<Mst />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;