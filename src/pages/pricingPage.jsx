import { chakra, Box, Text } from "@chakra-ui/react";
import CurrencySelector from "../components/pricingComponents/Header/currency/CurrencySelector";
import GetStarted from "../components/pricingComponents/main/GetStarted";
import PricingCards from "../components/pricingComponents/main/PricingCards";
import StartUps from "../components/pricingComponents/main/StartUps";

function PricingPage() {
  return (
    <>
      <chakra.header
        px={{ base: 8, md: 32 }}
        py={24}
        bg="grays.7"
        minHeight={{ md: "55vh" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth={{ base: "100%", md: "50%" }}
          margin="auto"
        >
          <Text
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight={{ base: "35px", md: "52px" }}
            fontWeight="medium"
            fontFamily="heading"
          >
            Pricing for every business
          </Text>

          <Text
            as="p"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight={{ base: "24px", md: "28px" }}
            mt={{ base: 6, md: 8 }}
            mb={{ base: 0, md: 16 }}
          >
            No hidden fees or charges - simple & flexible pricing that fits with
            your business at any stage.
          </Text>

          <CurrencySelector />
        </Box>
      </chakra.header>

      <main>
        <PricingCards />
        <StartUps />
        <GetStarted />
      </main>
    </>
  );
}

export default PricingPage;
