import { chakra, Box, Text, HStack, Link, Button } from "@chakra-ui/react";

function GetStarted() {
  return (
    <chakra.section
      data-aos="fade-up"
      px={{ base: 8, md: 24 }}
      pt={{ base: 10, md: 32 }}
      pb={{ base: 20, md: 32 }}
      bg="white"
    >
      <Box
        width={{ md: "50%" }}
        m="auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          fontFamily="heading"
          my={6}
        >
          Start building better communication experience with Sendchamp
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight={{ base: "24px", md: "28px" }}
          mb={12}
        >
          Access a platform that is modernizing communications and making it
          possible for your customers to communicate with your business the same
          way they do with their friends and family.
        </Text>

        <HStack spacing={{ base: 2, md: 5 }}>
          <Link href="/" display="inline-block">
            <Button
              size="lg"
              fontSize={{ base: "sm", md: "md" }}
              py={7}
              px="24px"
            >
              Start for free
            </Button>
          </Link>

          <Link href="/" display="inline-block">
            <Button
              variant="outline"
              size="lg"
              fontSize={{ base: "sm", md: "md" }}
              py={7}
              px="24px"
              borderColor="currentcolor"
              color="black.600"
              bg="transparent"
              _hover={{ bg: "none" }}
            >
              Talk to Sales
            </Button>
          </Link>
        </HStack>
      </Box>
    </chakra.section>
  );
}

export default GetStarted;
