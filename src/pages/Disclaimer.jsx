import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function Disclaimer() {
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
          <Heading as="h1" size="xl" mb={6} color="gray.900">Disclaimer</Heading>

          <VStack spacing={4} align="start" color="gray.600" fontSize="md" lineHeight="tall">
            <Text>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Text>
            <Text>
              Informasi yang terdapat dalam program pelatihan online gratis ini diselenggarakan oleh PT. EBERSHINE TALENTA INTEGRASI melalui KELASINDUSTRI.ID dan bersifat informatif serta edukatif. Dengan mendaftar dan mengikuti acara ini, Anda menyatakan telah membaca, memahami, dan menyetujui penyangkalan berikut.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>1. Sifat Program</Heading>
            <Text>
              Program ini adalah sesi <em>sharing</em> dan pelatihan berbasis pengetahuan praktis dan Praktik. Seluruh materi yang disampaikan merupakan pengalaman dan pandangan pribadi dari pembicara, bukan merupakan nasihat keuangan, akuntansi, atau hukum yang bersifat formal dan mengikat secara profesional.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>2. Jaminan Penempatan Kerja</Heading>
            <Text>
              KELASINDUSTRI.ID melalui program Job Connector berkomitmen untuk membantu peserta mendapatkan penempatan kerja sesuai bidang yang diminati. Kami menyediakan dukungan penuh mulai dari pembekalan keterampilan teknis dan profesional, hingga koneksi langsung dengan mitra perusahaan dan industri yang relevan. Komitmen kami bukan sekadar pelatihan — kami hadir menemani perjalanan karier Anda hingga berhasil masuk dunia kerja.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>3. Keakuratan Materi</Heading>
            <Text>
              Meskipun kami berupaya untuk menyajikan materi yang akurat dan terkini, informasi yang diberikan dalam acara ini dapat berubah seiring perkembangan regulasi, teknologi, dan kebutuhan industri. Peserta disarankan untuk selalu melakukan verifikasi mandiri sebelum menerapkan informasi yang didapat.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>4. Komitmen terhadap Sumber & Referensi</Heading>
            <Text>
              Setiap referensi atau platform pihak ketiga yang kami rekomendasikan dalam program ini telah kami kurasi dengan cermat berdasarkan relevansi dan kualitasnya. Kami berkomitmen untuk hanya menyarankan sumber-sumber terpercaya yang mendukung perjalanan belajar dan karier Anda di bidang Akuntansi dan ERP.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>5. Komitmen Penuh dari Penyelenggara</Heading>
            <Text>
              PT. EBERSHINE TALENTA INTEGRASI bersama seluruh pemateri berkomitmen penuh untuk menyampaikan program pelatihan yang berkualitas, akuntabel, dan berdampak nyata. Kami hadir sebagai mitra yang serius mendukung pertumbuhan karier Anda — bukan sekadar menyelenggarakan acara, melainkan memastikan setiap peserta mendapat nilai dan manfaat yang maksimal dari setiap sesi.
            </Text>

            <Heading as="h2" size="md" color="orange.500" mt={4}>6. Hubungi Kami</Heading>
            <Text>
              Apabila Anda memiliki pertanyaan atau keberatan terhadap konten yang disampaikan, silakan hubungi kami melalui saluran resmi KELASINDUSTRI.ID atau melalui email resmi PT. EBERSHINE TALENTA INTEGRASI.
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
