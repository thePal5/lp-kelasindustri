import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { landingData } from "../data/dummyData";

const MotionBox = motion.create(Box);

export default function Ornaments() {
  return (
    <Box position="absolute" top={0} left={0} w="100%" h="100%" overflow="hidden" zIndex={0} pointerEvents="none">

      {/* === SUBTLE GRID LINE PATTERN (abu-abu) === */}
      <Box
        position="absolute"
        top={0} left={0} w="100%" h="100%"
        opacity={0.08}
        style={{
          backgroundImage:
            "linear-gradient(to right, #9CA3AF 1px, transparent 1px), linear-gradient(to bottom, #9CA3AF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* === SUBTLE DOT OVERLAY === */}
      <Box
        position="absolute"
        top={0} left={0} w="100%" h="100%"
        opacity={0.05}
        style={{
          backgroundImage: "radial-gradient(circle, #6B7280 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* === WATERMARK LOGO (background transparan, center) === */}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "300px", md: "500px" }}
        h={{ base: "300px", md: "500px" }}
        opacity={0.04}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={landingData.logo}
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
          filter="grayscale(100%)"
        />
      </Box>

      {/* === TOP RIGHT — Spinning Ring (muted for light bg) === */}
      <MotionBox
        position="absolute"
        top="-80px"
        right="-80px"
        w="380px"
        h="380px"
        border="1.5px solid"
        borderColor="orange.300"
        borderRadius="full"
        opacity={0.2}
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
        borderColor="orange.200"
        borderRadius="full"
        opacity={0.15}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* === BOTTOM LEFT — Purple Spinning Ring === */}
      <MotionBox
        position="absolute"
        bottom="-100px"
        left="-100px"
        w="450px"
        h="450px"
        border="1.5px solid"
        borderColor="purple.300"
        borderRadius="full"
        opacity={0.18}
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
        borderColor="purple.200"
        borderRadius="full"
        opacity={0.12}
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
        bg="orange.400"
        borderRadius="3px"
        opacity={0.35}
        animate={{ y: [0, -18, 0], rotate: [0, 45, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        top="35%"
        right="8%"
        w="8px"
        h="8px"
        bg="purple.400"
        borderRadius="2px"
        opacity={0.3}
        animate={{ y: [0, 14, 0], rotate: [0, -45, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <MotionBox
        position="absolute"
        top="60%"
        right="15%"
        w="10px"
        h="10px"
        bg="cyan.400"
        borderRadius="2px"
        opacity={0.25}
        animate={{ y: [0, -12, 0], rotate: [45, 0, 45], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <MotionBox
        position="absolute"
        top="75%"
        left="20%"
        w="6px"
        h="6px"
        bg="orange.400"
        borderRadius="full"
        opacity={0.3}
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* === DIAGONAL ACCENT LINE — Top Left === */}
      <Box
        position="absolute"
        top="12%"
        left="0"
        w="200px"
        h="1px"
        bg="linear-gradient(to right, transparent, #F97316, transparent)"
        opacity={0.25}
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
        bg="linear-gradient(to right, transparent, #A78BFA, transparent)"
        opacity={0.25}
        transform="rotate(-30deg)"
        transformOrigin="right center"
      />

    </Box>
  );
}