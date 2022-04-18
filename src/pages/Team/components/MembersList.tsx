import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { CardUser } from "../../../components/Cards/User";
import { FilterInput } from "../../../components/FilterInput";
import { API_URL } from "../../../constants";
import useDebounce from "../../../hooks/useDebounce";
import { User } from "../../../types/User";

interface MembersListProps {
  membersIds?: string[];
}

export function MembersList({ membersIds }: MembersListProps) {
  const [filterInput, setFilterInput] = useState<string>("");
  const [members, setMembers] = useState<User[]>();

  const debouncedValue = useDebounce(filterInput, 500);

  useEffect(() => {
    if (membersIds) {
      getMembers(membersIds as string[]);
    }
  }, [membersIds]);

  function getMembers(membersIds: string[]) {
    let teamMembers: User[] = [];

    const membersEndpoints = membersIds.map(
      (member) => `${API_URL}/users/${member}`
    );

    axios
      .all(membersEndpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        data.map((response) => teamMembers.push(response.data));
      })
      .finally(() => {
        const formattedMembersData = teamMembers.map((teamMember) => {
          return {
            ...teamMember,
            fullName: `${teamMember.firstName} ${teamMember.lastName}`,
          };
        });
        setMembers(formattedMembersData);
      });
  }

  const membersFiltered = useMemo(() => {
    const lowerSearch = debouncedValue.toLowerCase();

    return members?.filter((member) =>
      member.fullName?.toLowerCase().includes(lowerSearch)
    );
  }, [debouncedValue, members]);

  return (
    <>
      <FilterInput
        value={filterInput}
        onChange={(search) => setFilterInput(search)}
      />
      {membersFiltered ? (
        <SimpleGrid w="100%" columns={4} spacing={6} my={4}>
          {membersFiltered?.map((member) => (
            <CardUser key={member.id} user={member} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex w="100%" alignItems="center" justifyContent="center" my={20}>
          <Spinner size="xl" thickness="5px" speed={"0.4s"} />
        </Flex>
      )}
    </>
  );
}
