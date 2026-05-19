import { Flex, Image, Link, HStack, Box } from "@chakra-ui/react";
import { landingData } from "../data/dummyData";

export default function Navbar() {
  return (
    <Box position="fixed" w="100%" top={0} zIndex={100} p={{ base: 4, md: 6 }} display="flex" justifyContent="center">
      <Box
        as="nav"
        w="100%"
        maxW="container.lg"
        bg="whiteAlpha.50"
        backdropFilter="blur(24px)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="full"
        px={6}
        py={3}
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
      >
        {/* Desktop Layout */}
        <Flex display={{ base: "none", md: "flex" }} justify="space-between" align="center">
          <Box bg="white" p={1.5} rounded="md" boxShadow="sm">
            <Image src={landingData.logo} alt="Logo" h="28px" objectFit="contain" />
          </Box>
          <HStack spacing={8}>
            {landingData.navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                color="whiteAlpha.900"
                fontWeight="bold"
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize="xs"
                _hover={{ color: "orange.400", textDecoration: "none", transform: "scale(1.05)" }}
                transition="all 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* Mobile Layout — logo di tengah, tanpa hamburger */}
        <Flex display={{ base: "flex", md: "none" }} justify="center" align="center">
          <Box bg="white" p={1} rounded="sm" boxShadow="sm">
            <Image src={landingData.logo} alt="Logo" h="24px" objectFit="contain" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
