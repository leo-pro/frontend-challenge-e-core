import { ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export function CardTeam() {
  return (
    <Flex
      width="100%"
      height="160px"
      borderRadius={"md"}
      borderColor="gray.200"
      borderWidth={"1px"}
      p={4}
      direction="column"
      gap={5}
    >
      <Heading as="p" fontSize={"lg"} color="gray.900">
        Braddock
      </Heading>

      <Flex>
        <Avatar size="sm" name="John Doe" />
        <Box ml="3">
          <Text fontWeight="bold" color="gray.900" fontSize="sm">
            Leonardo Alves
          </Text>
          <Text fontSize="xs" color="gray.600">
            Team Leader
          </Text>
        </Box>
      </Flex>

      <Button
        as="a"
        size="sm"
        href="/team/:id"
        borderRadius="md"
        color="gray.900"
        _hover={{
          background: "blue.900",
          color: "white",
        }}
        variant="ghost"
        p={2}
      >
        See all members
      </Button>
    </Flex>
  );
}
