import {
  Box,
  Button,
  color,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function FilterForm() {
  return (
    <Flex w="100%" gap={2}>
      <Input placeholder="Type for search..." size="lg" width="100%" />
      <Button
        leftIcon={<SearchIcon />}
        size="lg"
        borderRadius="md"
        bg="blue.900"
        color="white"
        _hover={{
          background: "blue.700",
        }}
      >
        Search
      </Button>
    </Flex>
  );
}
