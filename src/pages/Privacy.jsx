import { Box, Container, Heading, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function Privacy() {
  return (
    <Box pt="160px" pb={20} position="relative" zIndex={10} minH="80vh">
      <Container maxW="3xl">
        {/* Tombol Back */}
        <Box mb={6}>
          <Button
            as={Link}
            to="/"
            variant="ghost"
            color="whiteAlpha.700"
            fontWeight="bold"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
            _hover={{ color: "orange.400", bg: "whiteAlpha.100" }}
            leftIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            }
          >
            Kembali ke Home
          </Button>
        </Box>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          bg="whiteAlpha.100"
          p={{ base: 6, md: 10 }}
          rounded="2xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
          backdropFilter="blur(10px)"
        >
          <Heading as="h1" size="xl" mb={6} color="white">Kebijakan Privasi</Heading>
          
          <VStack spacing={4} align="start" color="whiteAlpha.800" fontSize="md" lineHeight="tall">
            <Text>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Text>
            <Text>
              Selamat datang di KELASINDUSTRI.ID. Kebijakan Privasi ini menjelaskan bagaimana PT. EBERSHINE TALENTA INTEGRASI ("kami") mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda mendaftar dan mengikuti program pelatihan gratis kami untuk Freshgraduate dan Mahasiswa Akuntansi.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>1. Informasi yang Kami Kumpulkan</Heading>
            <Text>
              Kami mengumpulkan informasi yang Anda berikan secara langsung saat melakukan pendaftaran, termasuk namun tidak terbatas pada nama lengkap, alamat email, nomor telepon, asal universitas atau instansi, dan informasi latar belakang pendidikan Anda.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>2. Penggunaan Informasi</Heading>
            <Text>
              Informasi yang Anda berikan akan digunakan untuk:
              <br/>- Memproses pendaftaran acara.
              <br/>- Mengirimkan materi kelas, sertifikat, atau pembaruan terkait acara.
              <br/>- Menghubungkan Anda dengan potensi peluang kerja (Job Connector) yang relevan dengan bidang Akuntansi dan ERP.
              <br/>- Kepentingan komunikasi lanjutan mengenai program pelatihan lain dari KELASINDUSTRI.ID.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>3. Keamanan Data</Heading>
            <Text>
              Kami berkomitmen untuk melindungi data pribadi Anda. Kami menerapkan standar keamanan yang wajar untuk mencegah akses, pengungkapan, atau modifikasi yang tidak sah terhadap informasi pribadi Anda. Namun, kami tidak menjamin keamanan mutlak dari transmisi data melalui internet.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>4. Pembagian Data kepada Pihak Ketiga</Heading>
            <Text>
              Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Informasi Anda hanya dapat dibagikan kepada mitra perusahaan yang bekerja sama dengan program Job Connector kami semata-mata untuk tujuan rekrutmen, setelah mendapat persetujuan dari Anda.
            </Text>
            
            <Heading as="h2" size="md" color="orange.400" mt={4}>5. Hubungi Kami</Heading>
            <Text>
              Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui kontak yang tersedia di platform KELASINDUSTRI.ID atau melalui email resmi perusahaan PT. EBERSHINE TALENTA INTEGRASI.
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
