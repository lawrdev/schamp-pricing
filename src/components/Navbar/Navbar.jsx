import { chakra, Image } from "@chakra-ui/react";
import Hamburger from "./navbarComponents/Hamburger";

function Navbar() {
  return (
    <>
      <chakra.nav
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        px={8}
        py={6}
        bg="backgrounds.4"
      >
        <Image
          src="https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/logos/NavLogo_nhyqah.svg"
          alt="sendchamp"
        />

        <Hamburger />
      </chakra.nav>
    </>
  );
}

export default Navbar;
