import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ornaments from "./components/Ornaments";

// Pages
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Ketentuan from "./pages/Ketentuan";
import Register from "./pages/Register";

function App() {
  return (
    // Background utama Putih — Light Theme
    <Box bg="white" minH="100vh" color="gray.900" position="relative" overflowX="hidden" scrollBehavior="smooth">
      <Ornaments />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/ketentuan" element={<Ketentuan />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;