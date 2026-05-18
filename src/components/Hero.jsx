import { Box, Container, Heading, Text, Button, Flex, VStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { landingData } from "../data/dummyData";

const MotionBox = motion.create(Box);

// Funky Star Icon SVG
const StarIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </Icon>
);

export default function Hero() {
  const { hero } = landingData;

  return (
    <Box id="home" pt={{ base: "100px", md: "120px" }} pb={{ base: 10, md: 20 }} position="relative" zIndex={10} overflow="hidden">
      <Container maxW="6xl" textAlign="center" position="relative">
        
        {/* Floating decorative elements */}
        <MotionBox
           position="absolute" top="10%" left="0%" display={{ base: "none", md: "block" }}
           animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
           <Box bg="purple.500" p={3} rounded="2xl" transform="rotate(-15deg)" border="2px solid" borderColor="whiteAlpha.400">
             <StarIcon w={8} h={8} color="white" />
           </Box>
        </MotionBox>
        <MotionBox
           position="absolute" bottom="15%" right="5%" display={{ base: "none", md: "block" }}
           animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
           <Box bg="orange.400" p={3} rounded="full" border="2px solid" borderColor="whiteAlpha.400">
             <Text fontSize="2xl">🔥</Text>
           </Box>
        </MotionBox>

        <MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}>
          {/* Badge */}
          <Flex justify="center" mb={8}>
            <Box bg="whiteAlpha.100" backdropFilter="blur(10px)" border="1px solid" borderColor="whiteAlpha.300" px={6} py={2} rounded="full">
              <Text color="orange.400" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" fontSize="sm">
                • {hero.badge} •
              </Text>
            </Box>
          </Flex>

          {/* Heading */}
          <Heading
            as="h1"
            fontSize={{ base: "xl", md: "4xl", lg: "6xl" }}
            fontWeight="black"
            lineHeight="1.2"
            mb={6}
            letterSpacing="tight"
            color="white"
          >
            {hero.heading}
          </Heading>

          {/* Target Audience Badge rotated */}
          <Box bg="gray.900" border="2px solid" borderColor="whiteAlpha.300" color="white" px={5} py={2} rounded="xl" display="inline-block" mb={12} boxShadow="sm">
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              ✨ {hero.targetAudience} ✨
            </Text>
          </Box>

          {/* Call to Action - Neo-Brutalist Button */}
          <VStack spacing={6}>
            <Button
              as="a"
              href="https://whatsform.com/2XYZje"
              target="_blank"
              rel="noopener noreferrer"
              bg="orange.400"
              color="gray.900"
              size="lg"
              px={12}
              py={8}
              fontSize="2xl"
              fontWeight="black"
              rounded="2xl"
              border="3px solid"
              borderColor="whiteAlpha.900"
              boxShadow="6px 6px 0px rgba(255, 255, 255, 0.9)"
              _hover={{ bg: "orange.300", transform: "translate(-2px, -2px)", boxShadow: "8px 8px 0px rgba(255, 255, 255, 1)" }}
              _active={{ transform: "translate(4px, 4px)", boxShadow: "0px 0px 0px rgba(255,255,255,1)" }}
              transition="all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            >
              {hero.ctaText}
            </Button>
            <Box bg="whiteAlpha.200" px={4} py={1} rounded="full">
               <Text color="whiteAlpha.900" fontSize="sm" fontWeight="bold" letterSpacing="wide" textTransform="uppercase">
                 {hero.subCtaText}
               </Text>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}