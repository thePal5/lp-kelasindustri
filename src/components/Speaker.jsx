import { Box, Container, Flex, Image, Text, VStack, Divider, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
// Pastikan Anda sudah menginstall react-icons
import { FaLinkedin } from "react-icons/fa";
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
          <Box w={{ base: "100%", md: "45%" }} maxW="400px" bg="gray.50" p={4} rounded="xl" border="1px solid" borderColor="gray.200" boxShadow="sm">
            <Image
              src={speaker.image}
              alt={speaker.name}
              w="100%"
              aspectRatio="4/3"
              objectFit="cover"
              rounded="lg"
              mb={4}
            />
            {/* VStack diperbarui untuk menambahkan margin bawah/atas dan icon */}
            <VStack spacing={2} pb={2}>
              <VStack spacing={0}>
                <Text color="gray.900" fontWeight="bold" fontSize="xl">{speaker.name}</Text>
                <Text color="orange.500" fontSize="sm">{speaker.role}</Text>
              </VStack>

              {/* Tautan LinkedIn Baru */}
              <Link
                href="https://www.linkedin.com/in/prayitno-scap-2367661ba"
                isExternal // isExternal membuat link terbuka di tab baru (target="_blank")
              >
                <Icon
                  as={FaLinkedin}
                  boxSize={6}
                  color="blue.600"
                  _hover={{ color: "blue.800" }}
                  transition="color 0.2s"
                />
              </Link>
            </VStack>
          </Box>

          {/* Divider Line (Vertical on Desktop, Horizontal on Mobile) */}
          <Divider orientation={{ base: "horizontal", md: "vertical" }} h={{ base: "1px", md: "250px" }} w={{ base: "100%", md: "1px" }} borderColor="gray.300" />

          {/* Speaker Description */}
          <Box w={{ base: "100%", md: "45%" }}>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="tall" textAlign="justify">
              {speaker.description}
            </Text>
          </Box>
        </MotionFlex>
      </Container>
    </Box>
  );
}