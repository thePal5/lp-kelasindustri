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

function App() {
  return (
    // Background utama Hitam sesuai Rules #1
    <Box bg="black" minH="100vh" color="white" position="relative" overflowX="hidden" scrollBehavior="smooth">
      <Ornaments />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/ketentuan" element={<Ketentuan />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;