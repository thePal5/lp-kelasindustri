import { Box, Container, Flex, Image, Text, VStack, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { landingData } from "../data/dummyData";

const MotionFlex = motion.create(Flex);

export default function Speaker() {
  const { speaker } = landingData;

  return (
    <Box id="speaker" py={{ base: 10, md: 20 }} position="relative" zIndex={10}>
      <Container maxW="container.lg">
        <MotionFlex
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={{ base: 8, md: 12 }}
        >
          {/* Speaker Image Box */}
          <Box w={{ base: "100%", md: "45%" }} maxW="400px" bg="whiteAlpha.100" p={4} rounded="xl" border="1px solid" borderColor="whiteAlpha.200">
            <Image
              src={speaker.image}
              alt={speaker.name}
              w="100%"
              aspectRatio="4/3"
              objectFit="cover"
              rounded="lg"
              mb={4}
            />
            <VStack spacing={0}>
              <Text color="white" fontWeight="bold" fontSize="xl">{speaker.name}</Text>
              <Text color="orange.400" fontSize="sm">{speaker.role}</Text>
            </VStack>
          </Box>

          {/* Divider Line (Vertical on Desktop, Horizontal on Mobile) */}
          <Divider orientation={{ base: "horizontal", md: "vertical" }} h={{ base: "1px", md: "250px" }} w={{ base: "100%", md: "1px" }} borderColor="whiteAlpha.400" />

          {/* Speaker Description */}
          <Box w={{ base: "100%", md: "45%" }}>
            <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} lineHeight="tall" textAlign="justify">
              {speaker.description}
            </Text>
          </Box>
        </MotionFlex>
      </Container>
    </Box>
  );
}