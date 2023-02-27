import { chakra } from "@chakra-ui/react";

const options = ["Products", "Developers", "Company", "Use Cases", "Pricing"];

function NavList() {
  return (
    <chakra.ul
      role="list"
      display={{ base: "none", xl: "flex" }}
      flexWrap={{ md: "wrap" }}
      marginInline={{ base: "2em", lg: "3em" }}
      justifyContent="space-evenly"
      alignContent="center"
      listStyleType="none"
    >
      {options.map((option, index) => (
        <chakra.li
          key={index}
          cursor="pointer"
          mr={{ md: 8 }}
          whiteSpace="nowrap"
          textAlign="center"
          _hover={{ opacity: 0.5 }}
          transitionProperty="common"
          transitionDuration="fast"
          transitionDelay="50ms"
          transitionTimingFunction="ease-in-out"
        >
          {option}
        </chakra.li>
      ))}
    </chakra.ul>
  );
}

export default NavList;
