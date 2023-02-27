import { Box, Stack, chakra, Select } from "@chakra-ui/react";

function CurrencySelector() {
  return (
    // TODO: use react select
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={2}
      mt={{ base: 8, md: "0px" }}
    >
      <Box>
        <Select
          placeholder="Nigeria"
          bg="white"
          width="282px"
          size="lg"
          border="1px solid rgba(25, 126, 239, 0.4)"
          sx={{ height: "64px" }}
        >
          <chakra.option height={6} value="option1">
            Andorra
          </chakra.option>
          <chakra.option value="option2">United Arab Emirates</chakra.option>
          <chakra.option value="option3">Afghanistan</chakra.option>
        </Select>
      </Box>

      <Box>
        <Select
          placeholder="NGN"
          bg="white"
          width="282px"
          size="lg"
          border="1px solid rgba(25, 126, 239, 0.4)"
          sx={{ height: "64px" }}
        >
          <chakra.option value="option1">Andorra - EUR</chakra.option>
          <chakra.option value="option2">
            United Arab Emirates - AED
          </chakra.option>
          <chakra.option value="option3">Afghanistan - AFN</chakra.option>
        </Select>
      </Box>
    </Stack>
  );
}

export default CurrencySelector;
