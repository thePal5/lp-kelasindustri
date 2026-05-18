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
          <Heading as="h1" size="xl" mb={6} color="white">Disclaimer</Heading>

          <VStack spacing={4} align="start" color="whiteAlpha.800" fontSize="md" lineHeight="tall">
            <Text>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Text>
            <Text>
              Informasi yang terdapat dalam program pelatihan online gratis ini diselenggarakan oleh PT. EBERSHINE TALENTA INTEGRASI melalui KELASINDUSTRI.ID dan bersifat informatif serta edukatif. Dengan mendaftar dan mengikuti acara ini, Anda menyatakan telah membaca, memahami, dan menyetujui penyangkalan berikut.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>1. Sifat Program</Heading>
            <Text>
              Program ini adalah sesi <em>sharing</em> dan pelatihan berbasis pengetahuan praktis di bidang Akuntansi dan ERP. Seluruh materi yang disampaikan merupakan pengalaman dan pandangan pribadi dari pembicara, bukan merupakan nasihat keuangan, akuntansi, atau hukum yang bersifat formal dan mengikat secara profesional.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>2. Jaminan Hasil</Heading>
            <Text>
              Kami tidak menjamin bahwa keikutsertaan dalam program ini akan secara langsung menghasilkan penempatan kerja, kenaikan karier, atau pendapatan tertentu. Hasil yang dicapai oleh setiap peserta sangat bergantung pada usaha, dedikasi, latar belakang, dan kondisi pasar tenaga kerja masing-masing individu.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>3. Keakuratan Materi</Heading>
            <Text>
              Meskipun kami berupaya untuk menyajikan materi yang akurat dan terkini, informasi yang diberikan dalam acara ini dapat berubah seiring perkembangan regulasi, teknologi, dan kebutuhan industri. Peserta disarankan untuk selalu melakukan verifikasi mandiri sebelum menerapkan informasi yang didapat.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>4. Tautan Pihak Ketiga</Heading>
            <Text>
              Program ini mungkin merujuk pada sumber daya atau platform dari pihak ketiga. Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik dari situs atau layanan pihak ketiga tersebut.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>5. Pembatasan Tanggung Jawab</Heading>
            <Text>
              PT. EBERSHINE TALENTA INTEGRASI dan seluruh pemateri tidak bertanggung jawab atas segala kerugian langsung maupun tidak langsung yang mungkin timbul akibat penggunaan informasi yang diperoleh dari program pelatihan ini.
            </Text>

            <Heading as="h2" size="md" color="orange.400" mt={4}>6. Hubungi Kami</Heading>
            <Text>
              Apabila Anda memiliki pertanyaan atau keberatan terhadap konten yang disampaikan, silakan hubungi kami melalui saluran resmi KELASINDUSTRI.ID atau melalui email resmi PT. EBERSHINE TALENTA INTEGRASI.
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
