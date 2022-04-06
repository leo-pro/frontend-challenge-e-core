import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { User } from "../../../types/User";

interface CardUserProps {
  user: User;
}

export function CardUser({ user }: CardUserProps) {
  return (
    <Flex borderRadius={"md"} borderColor="gray.200" borderWidth={"1px"} p={4}>
      <Avatar
        size="sm"
        name={`${user.firstName} ${user.lastName}`}
        bg="gray.200"
        color="gray.900"
      />
      <Box ml="3">
        <Text
          fontWeight="bold"
          color="gray.900"
          fontSize="sm"
        >{`${user.firstName} ${user.lastName}`}</Text>
        <Text fontSize="xs" color="gray.600">
          @{user.displayName}
        </Text>
      </Box>
    </Flex>
  );
}
