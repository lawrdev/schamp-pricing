import { useState } from "react";
import {
  Box,
  Image,
  Link,
  Text,
  IconButton,
  CloseButton,
  Portal,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
} from "@chakra-ui/react";
import { ReactComponent as HamburgerSvg } from "../assets/hamburger.svg";
import Products from "./accordion/Products";
import Developers from "./accordion/Developers";
import Company from "./accordion/Company";
import UseCases from "./accordion/UseCases";

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (e) => {
    onOpen();
  };
  return (
    <>
      <IconButton
        onClick={(e) => {
          handleClick(e);
        }}
        width="fit-content"
        height={30}
        display="flex"
        justifyContent="center"
        icon={<HamburgerSvg width={20} height={20} />}
        colorScheme={{ color: "#000" }}
        variant="ghost"
        _hover={{ bg: "none" }}
      />

      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent height="90vh">
          <Box display="flex" flexDirection="column" fontSize="xs">
            <DrawerHeader p={0}>
              <Box display="flex" px={4} pt={7} pb={5}>
                <Image
                  src="https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/logos/NavLogo_nhyqah.svg"
                  alt="sendchamp"
                  maxWidth="100%"
                  height="auto"
                />
                <CloseButton size="lg" ml="auto" />
              </Box>
            </DrawerHeader>

            <DrawerBody p={0}>
              <Accordion allowMultiple>
                <Products />
                <Developers />
                <Company />
                <UseCases />
              </Accordion>

              <Link
                href="/pricing"
                fontSize="1rem"
                _hover={{ textDecoration: "none" }}
              >
                <Text
                  as="h4"
                  fontFamily="heading"
                  letterSpacing="0.08em"
                  fontSize="xs"
                  py={6}
                  px={5}
                  borderBottomWidth="1px"
                >
                  PRICING
                </Text>
              </Link>
            </DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Hamburger;
