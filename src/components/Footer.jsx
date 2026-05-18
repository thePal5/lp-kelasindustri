import { Box, Text, Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { landingData } from "../data/dummyData";

const footerLinkStyle = {
  color: "var(--chakra-colors-whiteAlpha-600)",
  fontWeight: "bold",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <Box bg="whiteAlpha.50" borderTop="1px solid" borderColor="whiteAlpha.200" py={12} mt={20} position="relative" zIndex={10}>
      <Flex direction="column" justify="center" align="center" gap={6}>
        <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="black" color="white" letterSpacing="widest" textTransform="uppercase">
          KELASINDUSTRI.ID
        </Text>
        <HStack spacing={6} mb={4}>
          <Link to="/privacy" style={footerLinkStyle}
            onMouseEnter={e => e.target.style.color = "var(--chakra-colors-orange-400)"}
            onMouseLeave={e => e.target.style.color = "var(--chakra-colors-whiteAlpha-600)"}
          >Privacy</Link>
          <Link to="/disclaimer" style={footerLinkStyle}
            onMouseEnter={e => e.target.style.color = "var(--chakra-colors-orange-400)"}
            onMouseLeave={e => e.target.style.color = "var(--chakra-colors-whiteAlpha-600)"}
          >Disclaimer</Link>
          <Link to="/ketentuan" style={footerLinkStyle}
            onMouseEnter={e => e.target.style.color = "var(--chakra-colors-orange-400)"}
            onMouseLeave={e => e.target.style.color = "var(--chakra-colors-whiteAlpha-600)"}
          >Ketentuan</Link>
        </HStack>
        <Box px={6} py={2} rounded="full" border="1px solid" borderColor="whiteAlpha.300" bg="blackAlpha.500">
          <Text color="whiteAlpha.600" fontSize="xs" fontWeight="bold" letterSpacing="wide">
            {landingData.footer.text}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}