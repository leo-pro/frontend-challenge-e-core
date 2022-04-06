import {
  Avatar,
  Box,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import { Team } from "../../../types/Team";
import { User } from "../../../types/User";

interface CardTeamProps {
  id: string;
  name: string;
}

export function CardTeam({ id, name }: CardTeamProps) {
  const [teamLead, setTeamLead] = useState<User>();

  useEffect(() => {
    api.get(`/teams/${id}`).then((response) => {
      const { teamLeadId }: Team = response.data;

      api
        .get(`/users/${teamLeadId}`)
        .then((response) => setTeamLead(response.data));
    });
  }, [id]);

  return (
    <Flex
      width="100%"
      height="130px"
      borderRadius={"md"}
      borderColor="gray.200"
      borderWidth={"1px"}
      p={4}
      direction="column"
      justifyContent="space-around"
      gap={5}
    >
      <Link to={`teams/${id}`}>
        <Heading as="p" fontSize={"md"} color="blue.800">
          {name}
        </Heading>
      </Link>

      {teamLead ? (
        <Flex>
          <Avatar
            size="sm"
            name={`${teamLead.firstName} ${teamLead.lastName}`}
            bg="gray.200"
            color="gray.900"
          />
          <Box ml="3">
            <Text
              fontWeight="bold"
              color="gray.900"
              fontSize="sm"
            >{`${teamLead.firstName} ${teamLead.lastName}`}</Text>
            <Text fontSize="xs" color="gray.600">
              Team Leader
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex w="100%">
          <SkeletonCircle />
          <Flex direction={"column"}>
            <Skeleton w="130px" h="12px" ml={2} />
            <Skeleton w="100px" h="10px" ml={2} mt={2} />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
