import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SpNavbar from "./components/SpNavbar";
import HomePage from './pages/HomePage';
import DestinationPage from "./pages/DestinationPage";
import CrewPage from './pages/CrewPage';
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <BrowserRouter>
        <SpNavbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Destination" element={<DestinationPage />} />
          <Route path="/Crew" element={<CrewPage />} />
          <Route path="/Technology" element={<TechnologyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
