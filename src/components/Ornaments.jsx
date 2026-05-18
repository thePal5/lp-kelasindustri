import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function Ornaments() {
  return (
    <Box position="absolute" top={0} left={0} w="100%" h="100%" overflow="hidden" zIndex={0} pointerEvents="none">
      {/* Top Right Orange Glow */}
      <MotionBox
        position="absolute"
        top="-10%"
        right="-5%"
        w="400px"
        h="400px"
        bg="orange.500"
        filter="blur(150px)"
        opacity={0.3}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom Left White Glow */}
      <MotionBox
        position="absolute"
        top="50%"
        left="-10%"
        w="500px"
        h="500px"
        bg="whiteAlpha.400"
        filter="blur(180px)"
        opacity={0.2}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </Box>
  );
}