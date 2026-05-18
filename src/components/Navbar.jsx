import { Flex, Image, Link, HStack, IconButton, useDisclosure, Box, VStack } from "@chakra-ui/react";
import { landingData } from "../data/dummyData";

// Hamburger Icon SVG
const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Close Icon SVG
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

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
        borderRadius={isOpen ? "2xl" : "full"}
        px={6}
        py={3}
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
        transition="all 0.3s ease"
      >
        <Flex justify="space-between" align="center">
          {/* Menggunakan Gambar untuk Logo sesuai Rules */}
          <Box bg="white" p={{ base: 1, md: 1.5 }} rounded="full" boxShadow="sm">
             <Image src={landingData.logo} alt="Logo" h={{ base: "24px", md: "28px" }} objectFit="contain" />
          </Box>
          
          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {landingData.navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                color="whiteAlpha.900"
                fontWeight="bold"
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize="xs"
                position="relative"
                _hover={{ color: "orange.400", textDecoration: "none", transform: "scale(1.05)" }}
                transition="all 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          {/* Mobile Navigation Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color="white"
            rounded="full"
            aria-label="Toggle Navigation"
            _hover={{ bg: "whiteAlpha.200" }}
          />
        </Flex>

        {/* Mobile Navigation Menu */}
        <Box display={{ base: "block", md: "none" }}>
          {isOpen && (
            <Box pt={4} pb={2}>
              <VStack as="nav" spacing={4} align="center" p={2}>
                {landingData.navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    w="100%"
                    textAlign="center"
                    color="whiteAlpha.900"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="widest"
                    fontSize="sm"
                    _hover={{ color: "orange.400", textDecoration: "none" }}
                    onClick={onToggle}
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}