import {
  Flex,
  SimpleGrid,
  Heading,
  VStack,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardTeam } from "../../components/Cards/Team";
import { FilterForm } from "../../components/FilterForm";
import { api } from "../../services/api";

interface Team {
  id: string;
  name: string;
}

export function Home() {
  const [teams, setTeams] = useState<Team[]>();

  useEffect(() => {
    api
      .get("/teams")
      .then((response) => setTeams(response.data))
      .catch((error) => console.log(error));
  }, []);

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

      {teams ? (
        <SimpleGrid w="100%" columns={4} spacing={6} my={10}>
          {teams?.map((team) => (
            <CardTeam key={team.id} id={team.id} name={team.name} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex w="100%" alignItems="center" justifyContent="center" my={20}>
          <Spinner size="xl" thickness="5px" speed={"0.4s"} />
        </Flex>
      )}
    </Flex>
  );
}
