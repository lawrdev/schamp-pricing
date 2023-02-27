import { Grid, Text, GridItem, Box, Link } from "@chakra-ui/react";

const data = [
  {
    title: "Products",
    options: ["Channels/Router", "Verification", "No-Code Tools"],
  },
  {
    title: "Solutions",
    options: ["Onboard", "Engage", "Support", "Retain"],
  },
  {
    title: "Resources",
    options: [
      "Developers",
      "API Reference",
      "Guides",
      "SDKs/Libraries",
      "Community",
      "Pricing",
    ],
  },
  {
    title: "Company",
    options: [
      "About Us",
      "Our Stories",
      "Careers",
      "Contact",
      "Terms Of Use",
      "Privacy",
    ],
  },
  {
    title: "Follow us",
    options: ["Twitter", "LinkedIn", "FaceBook", "Instagram"],
  },
  {
    title: "Contact us",
    options: ["+234(0)18880261", "sales@sendchamp.com", "help@sendchamp.com"],
  },
];

function FooterGrid() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, minmax(0, 1fr))",
        md: "repeat(4, minmax(0, 1fr))",
        lg: "repeat(6, minmax(0, 1fr))",
      }}
      gap={5}
    >
      {data.map(({ title, options }, index) => (
        <GridItem key={index}>
          <Box fontSize={{ base: "sm", md: "md" }}>
            <Text as="h3" color="grays.2" fontFamily="heading">
              {title}
            </Text>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              mt={4}
              gap="0.5rem"
            >
              {options.map((op, i) => (
                <Link key={i} color="inherit" href="/">
                  <Text
                    as="p"
                    color="white"
                    _hover={{ color: "grays.10" }}
                    transitionProperty="common"
                    transitionDuration="fast"
                    transitionDelay="50ms"
                    transitionTimingFunction="ease-in-out"
                  >
                    {op}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export default FooterGrid;
