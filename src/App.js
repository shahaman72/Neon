import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import RiskReporting from "./Pages/RiskReporting";
import RevenueMonthly from "./Pages/RevenueMonthly";

import { IconButton, Box } from "@chakra-ui/react";
function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/rp" element={<RiskReporting />} />
        <Route path="/rm" element={<RevenueMonthly />} />
        <Route path="/cn" element={<RevenueMonthly />} />
      </Routes>
    </Box>
  );
}

export default App;
