import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserAvatar } from "../../components/UserAvatar";
import { api } from "../../services/api";
import { Team } from "../../types/Team";
import { User } from "../../types/User";
import { MembersList } from "./components/MembersList";

export function TeamDetails() {
  const [team, setTeam] = useState<Team>();
  const [teamLead, setTeamLead] = useState<User>();
  const [isError, setIsError] = useState<boolean>(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTeamById(id as string);

      if (team?.teamLeadId) {
        getTeamLeadById(team?.teamLeadId as string);
      }
    }
  }, [id, team?.teamLeadId]);

  function getTeamById(teamId: string) {
    api
      .get(`/teams/${teamId}`)
      .then((response) => {
        if (!response.data) {
          setIsError(true);
          return;
        }
        setTeam(response.data);
      })
      .catch((error) => console.log(error));
  }

  function getTeamLeadById(teamLeadId: string) {
    api
      .get(`/users/${teamLeadId}`)
      .then((response) => setTeamLead(response.data));
  }

  return (
    <Flex
      width={{ md: "700px", xl: "900px", "2xl": "1100px" }}
      mx={"256px"}
      marginTop="64px"
      direction={"column"}
      gap={10}
    >
      {isError ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Team ID not found!</AlertTitle>
          <AlertDescription>
            Please, <Link to="/">click here</Link> and return to homepage.
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <Heading as="h1" size="xl">
            {team?.name}
          </Heading>

          <UserAvatar user={teamLead as User} size="md" />

          <Flex w="100%" direction="column" gap={4}>
            <Heading as="p" size="md">
              Team Members
            </Heading>

            <MembersList membersIds={team?.teamMemberIds} />
          </Flex>
        </>
      )}
    </Flex>
  );
}
