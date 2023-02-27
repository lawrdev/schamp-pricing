import {
  Box,
  Image,
  Link,
  Text,
  IconButton,
  CloseButton,
  Button,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Accordion,
} from "@chakra-ui/react";
import { ReactComponent as HamburgerSvg } from "../assets/hamburger.svg";
import Products from "./accordion/Products";
import Developers from "./accordion/Developers";
import Company from "./accordion/Company";
import UseCases from "./accordion/UseCases";

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };
  return (
    <>
      <IconButton
        display={{ base: "flex", xl: "none" }}
        onClick={handleClick}
        width="fit-content"
        height={30}
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
                <CloseButton size="lg" ml="auto" onClick={onClose} />
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
                  _hover={{ bg: "black.50" }}
                >
                  PRICING
                </Text>
              </Link>

              <VStack px={5} pt={1} mb={5} mt="auto" spacing={3}>
                <Link width="100%">
                  <Button
                    variant="outline"
                    width="100%"
                    py={7}
                    paddingInline="24px"
                    fontWeight="semibold"
                    fontSize="sm"
                    borderRadius="8px"
                    borderColor="currentcolor"
                    bg="transparent"
                    color="black.600"
                    _hover={{ bg: "black.50" }}
                  >
                    Login
                  </Button>
                </Link>

                <Link width="100%">
                  <Button
                    colorScheme="primary"
                    variant="solid"
                    width="100%"
                    py={7}
                    paddingInline="24px"
                    fontWeight="semibold"
                    fontSize="sm"
                    borderRadius="8px"
                  >
                    Get Started
                  </Button>
                </Link>
              </VStack>
            </DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Hamburger;
