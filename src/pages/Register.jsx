import { useState } from "react";
import { Box, Container, Heading, FormControl, FormLabel, Input, Button, VStack, Text, useToast, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Error",
        description: "Harap isi semua field.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Format the message for WhatsApp
    const message = `Halo, saya ingin mendaftar.%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ANomor WhatsApp: ${formData.whatsapp}`;
    const targetWhatsApp = "628111776919"; // Ganti dengan nomor WhatsApp tujuan yang sebenarnya

    // Redirect to WhatsApp
    window.open(`https://wa.me/${targetWhatsApp}?text=${message}`, "_blank");
  };

  return (
    <Box pt={{ base: "120px", md: "150px" }} pb={20} minH="80vh">
      <Container maxW="md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          bg="white"
          p={8}
          rounded="2xl"
          border="3px solid"
          borderColor="gray.900"
          boxShadow="6px 6px 0px rgba(0, 0, 0, 0.85)"
        >
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading as="h1" size="xl" color="gray.900" mb={2}>
                Form Pendaftaran
              </Heading>
              <Text color="gray.600">
                Silakan isi data diri Anda untuk mendaftar.
              </Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel fontWeight="bold">Nama Lengkap</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    border="2px solid"
                    borderColor="gray.200"
                    _focus={{ borderColor: "orange.400", boxShadow: "none" }}
                    rounded="lg"
                  />
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel fontWeight="bold">Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda"
                    border="2px solid"
                    borderColor="gray.200"
                    _focus={{ borderColor: "orange.400", boxShadow: "none" }}
                    rounded="lg"
                  />
                </FormControl>

                <FormControl id="whatsapp" isRequired>
                  <FormLabel fontWeight="bold">Nomor WhatsApp</FormLabel>
                  <Input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    border="2px solid"
                    borderColor="gray.200"
                    _focus={{ borderColor: "orange.400", boxShadow: "none" }}
                    rounded="lg"
                  />
                </FormControl>

                <Button
                  type="submit"
                  w="100%"
                  bg="orange.400"
                  color="white"
                  size="lg"
                  mt={4}
                  fontWeight="black"
                  rounded="xl"
                  border="2px solid"
                  borderColor="gray.900"
                  boxShadow="4px 4px 0px rgba(0, 0, 0, 0.85)"
                  _hover={{ bg: "orange.500", transform: "translate(-1px, -1px)", boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.9)" }}
                  _active={{ transform: "translate(2px, 2px)", boxShadow: "0px 0px 0px rgba(0,0,0,1)" }}
                  transition="all 0.2s"
                >
                  Kirim via WhatsApp
                </Button>
              </VStack>
            </form>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
