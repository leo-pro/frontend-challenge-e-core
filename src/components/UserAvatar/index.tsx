import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import { User } from "../../types/User";

interface UserAvatarProps {
  user: User;
  size?: "xs" | "sm" | "md" | "lg";
}

export function UserAvatar({ user, size = "sm" }: UserAvatarProps) {
  return (
    <>
      {user ? (
        <Flex>
          <Avatar
            size={size}
            name={`${user.firstName} ${user.lastName}`}
            bg="gray.200"
            color="gray.900"
          />
          <Box ml="3">
            <Text
              fontWeight="bold"
              color="gray.900"
              fontSize={size}
            >{`${user.firstName} ${user.lastName}`}</Text>
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
    </>
  );
}
