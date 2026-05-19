import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function Ketentuan() {
  return (
    <Box pt="160px" pb={20} position="relative" zIndex={10} minH="80vh">
      <Container maxW="3xl">
        {/* Tombol Back */}
        <Box mb={6}>
          <Button
            as={Link}
            to="/"
            variant="ghost"
            color="gray.500"
            fontWeight="bold"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
            _hover={{ color: "orange.500", bg: "orange.50" }}
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
          bg="white"
          p={{ base: 6, md: 10 }}
          rounded="2xl"
          border="1px solid"
          borderColor="gray.200"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.06)"
        >
          <Heading as="h1" size="xl" mb={6} color="gray.900">Syarat & Ketentuan</Heading>

          <VStack spacing={4} align="start" color="gray.600" fontSize="md" lineHeight="tall">
            <Text>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Text>
            <Text>
              Dengan mendaftarkan diri sebagai peserta program pelatihan online gratis KELASINDUSTRI.ID yang diselenggarakan oleh PT. EBERSHINE TALENTA INTEGRASI, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku berikut ini.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>1. Eligibilitas Peserta</Heading>
            <Text>
              Program pelatihan ini terbuka untuk Freshgraduate Akuntansi, Mahasiswa Akuntansi, dan siapa saja yang memiliki minat untuk membangun karier di bidang Akuntansi dan sistem ERP. Pendaftaran bersifat gratis dan tidak dipungut biaya dalam bentuk apapun.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>2. Pendaftaran dan Data Peserta</Heading>
            <Text>
              Peserta wajib mengisi formulir pendaftaran dengan informasi yang akurat, lengkap, dan terbaru. Data yang diberikan akan digunakan sesuai dengan Kebijakan Privasi kami. Pendaftaran yang mengandung informasi palsu atau menyesatkan dapat dibatalkan sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>3. Kewajiban Peserta</Heading>
            <Text>
              Peserta wajib:
              <br/>- Menjaga kesopanan dan etika selama sesi berlangsung.
              <br/>- Tidak merekam, menggandakan, atau mendistribusikan materi acara tanpa izin tertulis dari penyelenggara.
              <br/>- Berpartisipasi aktif dan bertanggung jawab dalam setiap sesi yang diikuti.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>4. Hak Kekayaan Intelektual</Heading>
            <Text>
              Seluruh materi yang disajikan dalam program ini, termasuk namun tidak terbatas pada modul, presentasi, video rekaman, dan studi kasus, merupakan hak kekayaan intelektual milik PT. EBERSHINE TALENTA INTEGRASI dan pembicara. Peserta diizinkan menggunakan materi hanya untuk kepentingan belajar pribadi dan non-komersial.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>5. Perubahan Program</Heading>
            <Text>
              Penyelenggara berhak untuk mengubah jadwal, materi, pembicara, atau format acara kapan saja tanpa pemberitahuan terlebih dahulu apabila terdapat kondisi di luar kendali penyelenggara (force majeure). Penyelenggara tidak bertanggung jawab atas kerugian yang ditimbulkan akibat perubahan tersebut.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>6. Program Job Connector</Heading>
            <Text>
              Peserta yang berminat untuk mengikuti program Job Connector (program penempatan kerja) akan tunduk pada syarat dan ketentuan tambahan yang akan diinformasikan secara terpisah. Keikutsertaan dalam program Job Connector tidak bersifat otomatis dan memerlukan proses seleksi.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>7. Hukum yang Berlaku</Heading>
            <Text>
              Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum yang berlaku di Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan melalui musyawarah mufakat terlebih dahulu.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>8. Hubungi Kami</Heading>
            <Text>
              Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi kami melalui saluran resmi KELASINDUSTRI.ID atau email resmi PT. EBERSHINE TALENTA INTEGRASI.
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
