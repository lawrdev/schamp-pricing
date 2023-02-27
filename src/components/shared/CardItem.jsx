import PropTypes from "prop-types";
import { Box, chakra, HStack, Text, Badge, Button } from "@chakra-ui/react";
import React from "react";

function CardItem({ item }) {
  return (
    <Box
      borderWidth="1px"
      borderColor="grays.9"
      borderRadius="12px"
      display="flex"
      flexDirection="column"
      background="white"
      height="100%"
    >
      <chakra.div px={{ base: 5, md: 8 }} py={10}>
        <Box p={4} display="inline-flex" borderRadius="12px" bg="brand.main">
          {item.icon}
        </Box>
        <Text
          as="h2"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          mt={5}
          fontFamily="heading"
        >
          {item.title}
        </Text>

        <HStack
          fontSize={{ base: "sm", md: "md" }}
          // display="flex"
          justifyContent="space-between"
          mt={6}
        >
          <Text my="auto">{item.mssg1}</Text>
          <Text my="auto">{item.mssg2}</Text>
        </HStack>

        <HStack
          fontSize={{ base: "sm", md: "md" }}
          justifyContent="space-between"
          alignItems="end"
          mt={2}
          spacing={3}
        >
          <Text as="p" my="auto">
            <chakra.span fontWeight="bold">
              {`${item.currency} ${item.price1}`}
            </chakra.span>
            {item.per}
          </Text>

          {item.comingSoon ? (
            <Badge
              fontSize="xs"
              fontWeight="regular"
              textTransform="none"
              px={2.5}
              py={1}
              borderRadius="full"
              my="auto"
              bg="grays.6"
              color="brand.main"
            >
              Coming Soon
            </Badge>
          ) : null}
        </HStack>
      </chakra.div>

      {item.details ? (
        <Button
          as="h4"
          variant="ghost"
          height={{ md: "80px" }}
          fontSize={{ md: "xl" }}
          fontFamily="heading"
          fontWeight="light"
          textDecoration="underline"
          borderTopRadius="none"
          borderTop="1px"
          color="primary.600"
          borderColor="grays.9"
        >
          More details
        </Button>
      ) : null}
    </Box>
  );
}

CardItem.propTypes = {
  item: PropTypes.object,
};

export default CardItem;
