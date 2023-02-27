import { Box, Button, HStack, Link, Text, chakra } from "@chakra-ui/react";

function Cta() {
  return (
    <Box display={{ base: "none", xl: "flex" }} alignItems="center" gap={3}>
      <HStack spacing={5}>
        <Link
          outline="2px solid transparent"
          outlineOffset="2px"
          _hover={{ color: "#000" }}
          href={"/"}
        >
          Login
        </Link>
        <Link display="inline-block" href={"/"}>
          <Button fontSize="sm" py={5} px="24px">
            Get Started
          </Button>
        </Link>
      </HStack>

      <Text as="p" display="flex" cursor="pointer">
        <chakra.span
          display="inline-block"
          fontSize="1.1em"
          lineHeight="1em"
          verticalAlign="middle"
          fontWeight="medium"
        >
          NG
        </chakra.span>
      </Text>
    </Box>
  );
}

export default Cta;
