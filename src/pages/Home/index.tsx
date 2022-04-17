import { Flex, SimpleGrid, Heading, VStack, Spinner } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { CardTeam } from "../../components/Cards/Team";
import { FilterInput } from "../../components/FilterInput";
import useDebounce from "../../hooks/useDebounce";
import { api } from "../../services/api";

interface Team {
  id: string;
  name: string;
}

export function Home() {
  const [filterInput, setFilterInput] = useState("");
  const [teams, setTeams] = useState<Team[]>();

  const debouncedValue = useDebounce(filterInput, 500);

  useEffect(() => {
    api
      .get("/teams")
      .then((response) => setTeams(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredTeams = useMemo(() => {
    const searchLowerCase = debouncedValue.toLowerCase();

    return teams?.filter((team) =>
      team.name.toLowerCase().includes(searchLowerCase)
    );
  }, [debouncedValue, teams]);

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
        <FilterInput
          value={filterInput}
          onChange={(searchValue) => setFilterInput(searchValue)}
        />
      </VStack>

      {filteredTeams ? (
        <SimpleGrid w="100%" columns={4} spacing={6} my={10}>
          {filteredTeams?.map((team) => (
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
