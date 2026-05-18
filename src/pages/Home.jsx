import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Speaker from "../components/Speaker";

export default function Home() {
  return (
    <Box pt={10}>
      <Hero />
      <Speaker />
    </Box>
  );
}
