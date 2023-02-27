import { useState, useEffect } from "react";
import { chakra, Image } from "@chakra-ui/react";
import Cta from "./navbarComponents/cta/Cta";
import Hamburger from "./navbarComponents/Hamburger";
import NavList from "./navbarComponents/navList/NavList";

function Navbar() {
  const [scrollDirection, setScrollDirectione] = useState("top");

  useEffect(() => {
    let lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        setScrollDirectione("down");
      }
      if (y < lastVal) {
        setScrollDirectione("up");
      }
      if (y === 0) {
        setScrollDirectione("top");
      }
      lastVal = y;
    };
  }, []);

  return (
    <>
      <chakra.nav
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        px={{ base: 8, md: 24 }}
        py={6}
        bg="backgrounds.4"
        position="sticky"
        top={
          scrollDirection === "top"
            ? "0px"
            : scrollDirection === "down"
            ? "-100px"
            : scrollDirection === "up"
            ? "0px"
            : 0
        }
        userSelect="none"
        boxShadow={
          scrollDirection === "top"
            ? "none"
            : scrollDirection === "down"
            ? "0px 0px 5px #0D253F50"
            : scrollDirection === "up"
            ? "0px 0px 5px #0D253F50"
            : "none"
        }
        transition="all 0.75s cubic-bezier(0.645,0.045,0.355,1)"
        zIndex="2"
      >
        <Image
          src="https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/logos/NavLogo_nhyqah.svg"
          alt="sendchamp"
        />
        <NavList />

        <Hamburger />

        <Cta />
      </chakra.nav>
    </>
  );
}

export default Navbar;
