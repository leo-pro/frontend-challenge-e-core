import {
  Container,
  Flex,
  SimpleGrid,
  Heading,
  VStack,
  Box,
} from "@chakra-ui/react";
import { CardTeam } from "../../components/Cards/Team";
import { FilterForm } from "../../components/FilterForm";

export function Home() {
  return (
    <Flex
      width={{ md: "700px", xl: "900px", "2xl": "1100px" }}
      mx={"256px"}
      marginTop="64px"
      direction={"column"}
    >
      <VStack w="100%" spacing="32px">
        <Heading as="h1" size="xl">
          Find your team
        </Heading>
        <FilterForm />
      </VStack>
      <SimpleGrid w="100%" columns={4} spacing={8} my={10}>
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </SimpleGrid>
    </Flex>
  );
}
