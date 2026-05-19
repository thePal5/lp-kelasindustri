import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function Ornaments() {
  return (
    <Box position="absolute" top={0} left={0} w="100%" h="100%" overflow="hidden" zIndex={0} pointerEvents="none">

      {/* === SUBTLE GRID DOT PATTERN === */}
      <Box
        position="absolute"
        top={0} left={0} w="100%" h="100%"
        opacity={0.07}
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* === TOP RIGHT — Large Spinning Ring === */}
      <MotionBox
        position="absolute"
        top="-80px"
        right="-80px"
        w="380px"
        h="380px"
        border="1.5px solid"
        borderColor="#FF6B00"
        borderRadius="full"
        opacity={0.35}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner ring — top right */}
      <MotionBox
        position="absolute"
        top="-20px"
        right="-20px"
        w="260px"
        h="260px"
        border="1px solid"
        borderColor="#FF6B00"
        borderRadius="full"
        opacity={0.2}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* === BOTTOM LEFT — Violet Spinning Ring === */}
      <MotionBox
        position="absolute"
        bottom="-100px"
        left="-100px"
        w="450px"
        h="450px"
        border="1.5px solid"
        borderColor="#7C3AED"
        borderRadius="full"
        opacity={0.3}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      <MotionBox
        position="absolute"
        bottom="-40px"
        left="-40px"
        w="300px"
        h="300px"
        border="1px solid"
        borderColor="#A78BFA"
        borderRadius="full"
        opacity={0.2}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* === FLOATING ACCENT SQUARES === */}
      <MotionBox
        position="absolute"
        top="20%"
        left="5%"
        w="12px"
        h="12px"
        bg="#FF6B00"
        borderRadius="3px"
        opacity={0.7}
        animate={{ y: [0, -18, 0], rotate: [0, 45, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        top="35%"
        right="8%"
        w="8px"
        h="8px"
        bg="#7C3AED"
        borderRadius="2px"
        opacity={0.6}
        animate={{ y: [0, 14, 0], rotate: [0, -45, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <MotionBox
        position="absolute"
        top="60%"
        right="15%"
        w="10px"
        h="10px"
        bg="#06B6D4"
        borderRadius="2px"
        opacity={0.55}
        animate={{ y: [0, -12, 0], rotate: [45, 0, 45], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <MotionBox
        position="absolute"
        top="75%"
        left="20%"
        w="6px"
        h="6px"
        bg="#FF6B00"
        borderRadius="full"
        opacity={0.6}
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* === DIAGONAL ACCENT LINE — Top Left === */}
      <Box
        position="absolute"
        top="12%"
        left="0"
        w="200px"
        h="1px"
        bg="linear-gradient(to right, transparent, #FF6B00, transparent)"
        opacity={0.4}
        transform="rotate(-30deg)"
        transformOrigin="left center"
      />
      {/* === DIAGONAL ACCENT LINE — Bottom Right === */}
      <Box
        position="absolute"
        bottom="20%"
        right="0"
        w="180px"
        h="1px"
        bg="linear-gradient(to right, transparent, #7C3AED, transparent)"
        opacity={0.4}
        transform="rotate(-30deg)"
        transformOrigin="right center"
      />

    </Box>
  );
}
