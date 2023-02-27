import { chakra, Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";
import FooterGrid from "./grid/FooterGrid";

function Footer() {
  const d = new Date();
  return (
    <chakra.footer px={{ base: 8, md: 24 }} pt={20} bg="backgrounds.2">
      <FooterGrid />

      <Box
        display="flex"
        justifyContent="space-between"
        gap={{ md: 10 }}
        py={12}
        mt={16}
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="grays.5"
        textAlign={{ base: "center", md: "start" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          mb={{ base: 3, md: 0 }}
          width={{ base: "auto", md: "20%" }}
          maxWidth="227px"
          mx="auto"
          src="https://res.cloudinary.com/sendchamp/image/upload/v1647472665/Sendchamp%20Website/logos/SendchampWhite_kelitk.svg"
          alt="sendchamp"
        />

        <Grid
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 1fr))",
          }}
          gap={5}
          width={{ base: "70%", md: "100%" }}
          ml="auto"
          mr={{ base: "auto", md: 0 }}
        >
          <GridItem
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="row"
            textAlign="center"
          >
            <Image
              display={{ base: "none", md: "inline-block" }}
              maxWidth="100%"
              height="auto"
              src="https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/homePage/Nigeria_xxb47e.svg"
              alt="Nigeria"
            />
            <Text
              as="p"
              marginInlineStart={4}
              fontSize={{ base: "sm", md: "md" }}
              color="white"
              textAlign={{ base: "center", md: "start" }}
            >
              142, Ahmadu Bello Way, Victoria Island,
              <br />
              Lagos, Nigeria
            </Text>
          </GridItem>

          <GridItem
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="row"
            textAlign="center"
          >
            <Image
              display={{ base: "none", md: "inline-block" }}
              maxWidth="100%"
              height="auto"
              src="https://res.cloudinary.com/sendchamp/image/upload/v1647472668/Sendchamp%20Website/homePage/USA_ths9a7.svg"
              alt="Nigeria"
            />
            <Text
              as="p"
              marginInlineStart={4}
              fontSize={{ base: "sm", md: "md" }}
              color="white"
              textAlign={{ base: "center", md: "start" }}
            >
              2055 Limestone Rd STE 200-C Wilmington,
              <br />
              DE 19808
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Text
        as="p"
        fontSize={{ base: "sm", md: "md" }}
        color="grays.2"
        py={5}
        textAlign="center"
      >
        Built with ❤️ at Sendchamp Inc. - © {d.getFullYear()} | All rights
        reserved
      </Text>
    </chakra.footer>
  );
}

export default Footer;
