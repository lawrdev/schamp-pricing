import { Box, Button, chakra, Link, Text } from "@chakra-ui/react";

function StartUps() {
  return (
    <chakra.section
      data-aos="fade-up"
      px={{ base: 8, md: 24 }}
      pt={{ base: 10, md: 32 }}
      pb={{ base: 20, md: 32 }}
      bg="backgrounds.3"
    >
      <Box
        width={{ md: "50%" }}
        m="auto"
        display="flex"
        flexDirection="column"
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
          Sendchamp for Startups
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight={{ base: "24px", md: "28px" }}
          mb={12}
        >
          Apply for $1,000 in credits, if you are a startup that is less than 3
          years old with less than $500k in total funding.
        </Text>
        <Link href="/" display="inline-block">
          <Button
            size="lg"
            fontSize={{ base: "sm", md: "md" }}
            py={7}
            px="24px"
          >
            Apply now
          </Button>
        </Link>
      </Box>
    </chakra.section>
  );
}

export default StartUps;
