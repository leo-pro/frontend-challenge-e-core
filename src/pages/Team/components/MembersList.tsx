import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardUser } from "../../../components/Cards/User";
import { User } from "../../../types/User";

interface MembersListProps {
  membersIds?: string[];
}

export function MembersList({ membersIds }: MembersListProps) {
  const [members, setMembers] = useState<User[]>();

  useEffect(() => {
    if (membersIds) {
      getMembers(membersIds as string[]);
    }
  }, [membersIds]);

  function getMembers(membersIds: string[]) {
    let teamMembers: User[] = [];

    const membersEndpoints = membersIds.map(
      (member) =>
        `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/${member}`
    );

    axios
      .all(membersEndpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        data.map((response) => teamMembers.push(response.data));
      })
      .finally(() => {
        setMembers(teamMembers);
      });
  }

  return (
    <>
      {members ? (
        <SimpleGrid w="100%" columns={4} spacing={6} my={6}>
          {members?.map((member) => (
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
