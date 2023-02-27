import { chakra, Grid, GridItem } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { pricingCardsState } from "../../../recoil/atoms";
import CardItem from "../../shared/CardItem";

function PricingCards() {
  const data = useRecoilValue(pricingCardsState);

  return (
    <chakra.section
      data-aos="fade-up"
      px={{ base: 8, md: 24 }}
      mt={{ base: 0, md: 16 * -1 }}
      mb={32}
    >
      <Grid
        templateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        gap={8}
      >
        {data?.map((option, i) => (
          <GridItem key={i}>
            <CardItem item={option} />
          </GridItem>
        ))}
      </Grid>
    </chakra.section>
  );
}

export default PricingCards;
