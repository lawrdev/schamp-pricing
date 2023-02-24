import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Company() {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton px={5} pt={5} pb={6} fontSize="1rem">
          <Box
            as="div"
            flex="1 1 0%"
            textAlign="left"
            fontFamily="heading"
            fontSize="xs"
            letterSpacing="0.08em"
          >
            COMPANY
          </Box>
          <AccordionIcon width="24px" height="24px" />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontSize="sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Company;
